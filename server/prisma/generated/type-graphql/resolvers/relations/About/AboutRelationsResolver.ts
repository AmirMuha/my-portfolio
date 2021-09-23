import * as TypeGraphQL from "type-graphql";
import { About } from "../../../models/About";
import { Admin } from "../../../models/Admin";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => About)
export class AboutRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Admin, {
    nullable: false
  })
  async admin(@TypeGraphQL.Root() about: About, @TypeGraphQL.Ctx() ctx: any): Promise<Admin> {
    return getPrismaFromContext(ctx).about.findUnique({
      where: {
        id: about.id,
      },
    }).admin({});
  }
}
