import bcrypt from "bcrypt";
import {
  Args,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Admin, CreateAdminArgs } from "../../prisma/generated/type-graphql";
import CountAdmins from "../middlewares/CountAdmins";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { MyContext } from "../types/MyContext";
import { createApiKey } from "../utils/getprivatekey";
import { sendConfirmationEmail } from "../utils/sendConfirmationEmail";

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
