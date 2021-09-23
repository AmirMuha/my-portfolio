import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTechCategoryArgs } from "./args/AggregateTechCategoryArgs";
import { TechCategory } from "../../../models/TechCategory";
import { AggregateTechCategory } from "../../outputs/AggregateTechCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TechCategory)
export class AggregateTechCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregateTechCategory, {
    nullable: false
  })
  async aggregateTechCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTechCategoryArgs): Promise<AggregateTechCategory> {
    return getPrismaFromContext(ctx).techCategory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
