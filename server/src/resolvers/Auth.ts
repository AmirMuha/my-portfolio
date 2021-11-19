import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UpdateAdminPasswordArgs } from "../types/arg-types/UpdateAdminArgs";
import {
  Args,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Admin } from "../../prisma/generated/type-graphql";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { redis } from "../redis-client";
import { ConfirmTokenOrCodeArgsType } from "../types/arg-types/ConfirmEmailArgs";
import { ForgotPasswordArgs } from "../types/arg-types/ForgotPasswordArgs";
import { LoginArgsType } from "../types/arg-types/LoginArgs";
import { ResetPasswordArgs } from "../types/arg-types/ResetPasswordArgs";
import { JwtVerifyWithPayloadType } from "../types/JwtVerifyWithPayloadType";
import { MyContext } from "../types/MyContext";
import { randomNumber } from "../utils/randomNumber";
import { sendConfirmationEmail } from "../utils/sendConfirmationEmail";
import { EmailTypes, sendEmail } from "../utils/sendEmail";

@ObjectType()
class LoginReturnType {
  @Field(() => String, { nullable: true })
  token?: string;
}
@Resolver()
export class AuthResolver {
  @Mutation(() => LoginReturnType, { nullable: true })
  async login(
    @Ctx() { prisma, req }: MyContext,
    @Args() args: LoginArgsType
  ): Promise<LoginReturnType | undefined> {
    const admin = await prisma.admin.findUnique({
      where: {
        email: args.data.email,
      },
    });
    if (!admin) throw new Error("Email or Password is incorrect.");
    if (!admin.confirmed) {
      await sendConfirmationEmail(admin.id, admin.email);
      throw new Error(
        "You haven't confirmed your email yet. An email sent to you to confirm your email."
      );
    }
    const isPassCorrect = await bcrypt.compare(
      args.data.password,
      admin.password
    );
    if (!isPassCorrect) throw new Error("Email or Password is incorrect.");
    const token = jwt.sign({ id: admin.id }, process.env.JWT_PRIVATE_KEY!, {
      expiresIn: `7d`,
    });
    req.session.token = token;
    return {
      token,
    };
  }

  @UseMiddleware(isLoggedIn)
  @Mutation(() => Boolean, { nullable: true })
  async logout(@Ctx() { req }: MyContext): Promise<boolean | undefined> {
    req.session.token = "";
    return true;
  }

  @Mutation(() => Boolean, { nullable: true })
  async confirmEmail(
    @Ctx() { prisma }: MyContext,
    @Args() args: ConfirmTokenOrCodeArgsType
  ): Promise<boolean | undefined> {
    if (!args.token && !args.code) {
      throw new Error(
        "You need to provide either a token or code to confirm your email."
      );
    }
    const admin = await prisma.admin.findUnique({
      where: { email: args.email },
    });
    if (!admin) throw new Error("There is no admin with this email address.");
    if (args.token) {
      const verifiedToken = await jwt.verify(args.token, process.env.JWT_PRIVATE_KEY!);
      if (verifiedToken) throw new Error("Token is not valid or has expired.");
      await prisma.admin.update({
        data: {
          confirmed: true,
        },
        where: { id: admin.id },
      });
    } else if (args.code) {
      const code = await redis.get(`${process.env.EMAIL_CONFIRMATION_CODE!}-${admin.id}`);
      if (!code) throw new Error("Email confirmation code has expired.");
      if (args.code !== parseInt(code))
        throw new Error("Email confirmation code is incorrect.");
      await prisma.admin.update({
        data: {
          confirmed: true,
        },
        where: { id: admin.id },
      });
    }
    return true;
  }

  @UseMiddleware(isLoggedIn)
  @Mutation(() => Boolean)
  async forgotPassword(
    @Ctx() { data, prisma }: MyContext,
    @Args() args: ForgotPasswordArgs
  ): Promise<boolean> {
    const admin = await prisma.admin.findUnique({
      where: { email: args.email },
    });
    if (!admin) throw new Error("There is no admin with the given email.");
    const token = jwt.sign({ id: data.userId }, process.env.JWT_PRIVATE_KEY!, {
      expiresIn: 10 * 60,
    });
    const confirmation_code = randomNumber(1000, 9999);
    await redis.set(
      `FORGOTPASSWORD_CODE-${data.id}`,
      confirmation_code,
      "ex",
      60 * 10
    );
    const result = await sendEmail({
      type: EmailTypes.FORGOT_PASSWORD,
      from: process.env.MY_EMAIL!,
      to: args.email,
      subject: "Forgot Password",
      token,
      confirmation_code,
    });
    if (!result)
      throw new Error("Couldn't send the email, Please try again later.");
    return true;
  }

  @UseMiddleware(isLoggedIn)
  @Mutation(() => Boolean)
  async verifyPassword(
    @Ctx() { prisma, data }: MyContext,
    @Args(() => UpdateAdminPasswordArgs)
    { data: { oldPassword } }: UpdateAdminPasswordArgs
  ): Promise<boolean> {
    const admin = await prisma.admin.findFirst({
      where: {
        id: { equals: data.userId },
      },
    });
    if (!admin) {
      throw new Error(
        "Couldn't found admin with the given id, please make sure you're logged in."
      );
    }
    const isPasswordCorrect = await bcrypt.compare(oldPassword, admin.password);
    if (!isPasswordCorrect) {
      throw new Error("Old password is incorrect.");
    }
    return true;
  }

  @UseMiddleware(isLoggedIn)
  @Mutation(() => Boolean)
  async confirmTokenOrCode(
    @Ctx() { data }: MyContext,
    @Args() args: ConfirmTokenOrCodeArgsType
  ): Promise<boolean> {
    if (!args.code && !args.token)
      throw new Error(
        "Please provide either a code or token to confirm deleting the admin."
      );
    if (args.token) {
      const token = args.token;
      const verifiedToken = (await jwt.verify(token, process.env.JWT_PRIVATE_KEY!, {
        complete: true,
      })) as JwtVerifyWithPayloadType;
      if (!verifiedToken)
        throw new Error("Token is either invalid or has expired.");
      return true;
    } else {
      const code = await redis.get(`FORGOTPASSWORD_CODE-${data.userId}`);
      if (!code) throw new Error("Code is either incorrect or has expired.");
      if (parseInt(code) !== args.code) throw new Error("Code is incorrect.");
      return true;
    }
  }

  @UseMiddleware(isLoggedIn)
  @Mutation(() => String)
  async resetPassword(
    @Ctx() { prisma, data, req }: MyContext,
    @Args() args: ResetPasswordArgs
  ): Promise<string> {
    let flag: boolean = false;
    if(args.needCode) {
      if (!args.code && !args.token)
        throw new Error(
          "Please provide either a code or token to confirm deleting the admin."
        );
      if (args.token) {
        const token = args.token;
        const verifiedToken = (await jwt.verify(token, process.env.JWT_PRIVATE_KEY!, {
          complete: true,
        })) as JwtVerifyWithPayloadType;
        if (!verifiedToken)
          throw new Error("Your code or token has expired. Please try again.");
        flag = true;
      } else {
        const code = await redis.get(`FORGOTPASSWORD_CODE-${data.userId}`);
        if (!code) throw new Error("Code is either incorrect or has expired.");
        if (parseInt(code) !== args.code)
          throw new Error("Your code or token has expired. Please try again.");
        flag = true;
      }
      if (!flag)
        throw new Error("Your code or token has expired. Please try again.");
    }
    const hashedPassword = await bcrypt.hash(args.newPassword, 12);
    await prisma.admin.update({
      data: {
        password: hashedPassword,
      },
      where: {
        email: args.email,
      },
    });
    req.session.token = "";
    return "Password successfully changed !";
  }
  @Query(() => Boolean)
  async isThereAnAdmin(@Ctx() { prisma }: MyContext): Promise<boolean> {
    const foundadmin = await prisma.admin.findFirst({});
    return foundadmin ? true : false;
  }
  @Query(() => Admin, { nullable: true })
  async me(@Ctx() { prisma }: MyContext): Promise<Admin> {
    const admin = prisma.admin.findFirst({
      select: {
        email: true,
        github: true,
        instagram: true,
        whatsapp: true,
        linkedIn: true,
        skype: true,
        heroImage: true,
        resumes: true,
        lname: true,
        fname: true,
      },
    });
    return admin as any;
  }
}
