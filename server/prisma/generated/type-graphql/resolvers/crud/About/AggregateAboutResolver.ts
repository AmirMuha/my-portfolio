import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAboutArgs } from "./args/AggregateAboutArgs";
import { About } from "../../../models/About";
import { AggregateAbout } from "../../outputs/AggregateAbout";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => About)
export class AggregateAboutResolver {
  @TypeGraphQL.Query(_returns => AggregateAbout, {
    nullable: false
  })
  async aggregateAbout(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAboutArgs): Promise<AggregateAbout> {
    return getPrismaFromContext(ctx).about.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
