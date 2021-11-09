import * as TypeGraphQL from "type-graphql";
import { Admin } from "../../../models/Admin";
import { Stack } from "../../../models/Stack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stack)
export class StackRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Admin, {
    nullable: false
  })
  async admin(@TypeGraphQL.Root() stack: Stack, @TypeGraphQL.Ctx() ctx: any): Promise<Admin> {
    return getPrismaFromContext(ctx).stack.findUnique({
      where: {
        id: stack.id,
      },
    }).admin({});
  }
}
