import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStackArgs } from "./args/AggregateStackArgs";
import { Stack } from "../../../models/Stack";
import { AggregateStack } from "../../outputs/AggregateStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stack)
export class AggregateStackResolver {
  @TypeGraphQL.Query(_returns => AggregateStack, {
    nullable: false
  })
  async aggregateStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStackArgs): Promise<AggregateStack> {
    return getPrismaFromContext(ctx).stack.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
