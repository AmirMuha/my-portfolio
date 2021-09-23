import * as TypeGraphQL from "type-graphql";
import { Tech } from "../../../models/Tech";
import { TechCategory } from "../../../models/TechCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tech)
export class TechRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TechCategory, {
    nullable: false
  })
  async tech_categories(@TypeGraphQL.Root() tech: Tech, @TypeGraphQL.Ctx() ctx: any): Promise<TechCategory> {
    return getPrismaFromContext(ctx).tech.findUnique({
      where: {
        id: tech.id,
      },
    }).tech_categories({});
  }
}
