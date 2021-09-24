import bcrypt from "bcrypt";
import {
  Args,
  Ctx,
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
      const newAdmin = prisma.admin.create({
        data: { ...args.data, apikey, password: hashedPassword },
      });
      return newAdmin;
    } else {
      throw new Error("You are not allowed to perform this operation.");
    }
  }

  @UseMiddleware(isLoggedIn)
  @Query(() => Admin, { nullable: true })
  async getAdmin(
    @Ctx() { prisma, data }: MyContext
  ): Promise<Admin | undefined> {
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
