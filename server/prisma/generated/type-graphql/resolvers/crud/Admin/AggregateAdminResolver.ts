import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAdminArgs } from "./args/AggregateAdminArgs";
import { Admin } from "../../../models/Admin";
import { AggregateAdmin } from "../../outputs/AggregateAdmin";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Admin)
export class AggregateAdminResolver {
  @TypeGraphQL.Query(_returns => AggregateAdmin, {
    nullable: false
  })
  async aggregateAdmin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAdminArgs): Promise<AggregateAdmin> {
    return getPrismaFromContext(ctx).admin.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
