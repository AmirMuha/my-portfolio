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
import { JWT_PRIVATE_KEY } from "../constants/environment-variables";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { LoginArgsType } from "../types/arg-types/LoginArgs";
import { MyContext } from "../types/MyContext";

@Resolver(Admin)
export class AuthResolver {
  @Mutation(() => Boolean, { nullable: true })
  async login(
    @Ctx() { prisma, req }: MyContext,
    @Args() args: LoginArgsType
  ): Promise<Boolean | undefined> {
    const admin = await prisma.admin.findUnique({
      where: {
        email: args.data.email,
      },
    });
    if (!admin) throw new Error("Email or Password is incorrect.");
    const isPassCorrect = await bcrypt.compare(
      args.data.password,
      admin.password
    );
    if (!isPassCorrect) throw new Error("Email or Password is incorrect.");
    req.session.token = await jwt.sign(admin.id, JWT_PRIVATE_KEY);
    return true;
  }

  @UseMiddleware(isLoggedIn)
  @Query(() => Admin, { nullable: true })
  async me(@Ctx() { prisma, data }: MyContext): Promise<Admin | undefined> {
    const userId = data.userId;
    const admin = await prisma.admin.findUnique({
      where: {
        id: userId,
      },
    });
    if (!admin) throw new Error("Admin not found.");
    return admin;
  }
}
