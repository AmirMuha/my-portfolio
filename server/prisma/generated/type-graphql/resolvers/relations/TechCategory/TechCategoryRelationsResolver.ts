import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { Tech } from "../../../models/Tech";
import { TechCategory } from "../../../models/TechCategory";
import { TechCategoryTechsArgs } from "./args/TechCategoryTechsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TechCategory)
export class TechCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Tech], {
    nullable: false
  })
  async techs(@TypeGraphQL.Root() techCategory: TechCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TechCategoryTechsArgs): Promise<Tech[]> {
    return getPrismaFromContext(ctx).techCategory.findUnique({
      where: {
        id: techCategory.id,
      },
    }).techs(args);
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() techCategory: TechCategory, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).techCategory.findUnique({
      where: {
        id: techCategory.id,
      },
    }).project({});
  }
}
