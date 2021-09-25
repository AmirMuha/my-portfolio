import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  Args,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Admin } from "../../prisma/generated/type-graphql";
import {
  EMAIL_CONFIRMATION_CODE,
  JWT_PRIVATE_KEY,
} from "../constants/envs-and-consts";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { redis } from "../redis-client";
import { ConfirmEmailArgsType } from "../types/arg-types/ConfirmEmailArgs";
import { LoginArgsType } from "../types/arg-types/LoginArgs";
import { MyContext } from "../types/MyContext";
import { sendConfirmationEmail } from "../utils/sendConfirmationEmail";

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean, { nullable: true })
  async login(
    @Ctx() { prisma, req }: MyContext,
    @Args() args: LoginArgsType
  ): Promise<boolean | undefined> {
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
    const token = await jwt.sign({ id: admin.id }, JWT_PRIVATE_KEY, {
      expiresIn: `7d`,
    });
    req.session.token = token;
    return true;
  }
  @UseMiddleware(isLoggedIn)
  @Mutation(() => Boolean, { nullable: true })
  async logout(@Ctx() { req }: MyContext): Promise<boolean | undefined> {
    req.session.token = "";
    return true;
  }

  @Mutation(() => Boolean, { nullable: true })
  async confimEmail(
    @Ctx() { prisma }: MyContext,
    @Args() args: ConfirmEmailArgsType
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
      const verifiedToken = await jwt.verify(args.token, JWT_PRIVATE_KEY);
      if (verifiedToken) throw new Error("Token is not valid or has expired.");
      await prisma.admin.update({
        data: {
          confirmed: true,
        },
        where: { id: admin.id },
      });
    } else if (args.code) {
      const code = await redis.get(`${EMAIL_CONFIRMATION_CODE}-${admin.id}`);
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
  @Query(() => Admin)
  async me(@Ctx() { data }: MyContext): Promise<Admin> {
    return data.admin;
  }
}
