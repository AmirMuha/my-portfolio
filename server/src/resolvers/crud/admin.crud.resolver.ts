import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin } from "../../entities/admin.entity";
import {
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware
} from "type-graphql";
import CountAdmins from "../../middlewares/countAdmins.middleware";
import { isLoggedIn } from "../../middlewares/isLoggedIn.middleware";
import { JwtVerifyWithPayloadType } from "../../types/jwtVerifyWithPayload.type";
import { MyContext } from "../../types/myContext.type";
import { ConfirmTokenOrCodeArgsType } from "../../types/typegraphql/args/confirmEmail.arg.type";
import { createApiKey } from "../../utils/getprivatekey.util";
import { sendConfirmationEmail } from "../../utils/sendConfirmationEmail.util";
import { EmailTypes, sendEmail } from "../../utils/sendEmail.util";

@Resolver(Admin)
export class AdminCrudResolver {
  @UseMiddleware(CountAdmins)
  @Mutation(() => Admin, { nullable: true })
  async createAdmin(
    @Ctx() { prisma, data }: MyContext,
    @Args() args: CreateAdminArgs
  ): Promise<Admin | undefined> {
    if (data.numberOfAdmins === 0) {
      const apikey = await createApiKey();
      const hashedPassword = await bcrypt.hash(args.data.password, 12);
      const newAdmin = await prisma.admin.create({
        data: { ...args.data, apikey, password: hashedPassword },
      });
      await sendConfirmationEmail(newAdmin.id, newAdmin.email);
      return newAdmin;
    } else {
      throw new Error("You are not allowed to perform this operation.");
    }
  }

  @UseMiddleware(isLoggedIn)
  @Mutation(() => Admin, { nullable: true })
  async updateAdmin(
    @Ctx() { prisma }: MyContext,
    @Args() args: UpdateAdminArgs
  ): Promise<Admin | undefined> {
    if (
      args.data.password ||
      args.data.projects ||
      args.data.about ||
      args.data.stack ||
      args.data.messages
    ) {
      throw new Error("Your are not allowed to udpate this property.");
    }
    const updatedAdmin = await prisma.admin.update({
      data: args.data,
      where: args.where,
    });
    return updatedAdmin;
  }

  @UseMiddleware(isLoggedIn)
  @Mutation(() => Boolean)
  async deleteAdmin(@Args() args: DeleteAdminArgs): Promise<boolean> {
    if (!args.where.email)
      throw new Error(
        "Please provide the email and id of the admin you want to delete."
      );
    const id = args.where.id;
    const token = await jwt.sign({ id }, process.env.JWT_PRIVATE_KEY!, {
      expiresIn: 10 * 60,
    });
    const confirmation_code = randomNumber(1000, 9999);
    await redis.set(`DELETEADMIN_CODE-${id}`, confirmation_code, "ex", 10 * 60);
    await sendEmail({
      type: EmailTypes.CONFIRMATION,
      subject: "Deleting Admin",
      from: process.env.MY_EMAIL!,
      to: args.where.email!,
      token: token,
      confirmation_code,
    });
    return true;
  }

  @UseMiddleware(isLoggedIn)
  @Mutation(() => Boolean)
  async confirmAdminDelete(
    @Ctx() { prisma, data }: MyContext,
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
      await prisma.admin.delete({
        where: {
          id: verifiedToken.payload.id,
          email: args.email,
        },
      });
    } else {
      const code = await redis.get(`DELETEADMIN_CODE-${data.userId}`);
      if (!code) throw new Error("Code is either incorrect or has expired.");
      if (parseInt(code) !== args.code) throw new Error("Code is incorrect.");
      await prisma.admin.delete({
        where: {
          email: args.email,
        },
      });
    }
    return true;
  }

  @UseMiddleware(isLoggedIn)
  @Query(() => Admin)
  async getAdmin(@Ctx() { data }: MyContext): Promise<Admin> {
    return data.admin;
  }

  @UseMiddleware(CountAdmins)
  @Query(() => Int, { nullable: true })
  async getNumOfAdmins(@Ctx() { data }: MyContext): Promise<number> {
    return data.numberOfAdmins;
  }
}
