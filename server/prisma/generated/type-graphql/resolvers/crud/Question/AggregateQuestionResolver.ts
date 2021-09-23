import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateQuestionArgs } from "./args/AggregateQuestionArgs";
import { Question } from "../../../models/Question";
import { AggregateQuestion } from "../../outputs/AggregateQuestion";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Question)
export class AggregateQuestionResolver {
  @TypeGraphQL.Query(_returns => AggregateQuestion, {
    nullable: false
  })
  async aggregateQuestion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateQuestionArgs): Promise<AggregateQuestion> {
    return getPrismaFromContext(ctx).question.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
