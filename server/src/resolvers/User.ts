import { Resolver, Query } from "type-graphql";
import { User } from "../modules/object-types/User";
import prisma from "../prisma-client";

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async allUsers() {
    return prisma.user.findMany();
  }
}
