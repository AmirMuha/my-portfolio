import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTechArgs } from "./args/AggregateTechArgs";
import { Tech } from "../../../models/Tech";
import { AggregateTech } from "../../outputs/AggregateTech";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tech)
export class AggregateTechResolver {
  @TypeGraphQL.Query(_returns => AggregateTech, {
    nullable: false
  })
  async aggregateTech(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTechArgs): Promise<AggregateTech> {
    return getPrismaFromContext(ctx).tech.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
