import * as TypeGraphQL from "type-graphql";
import { Answer } from "../../../models/Answer";
import { Question } from "../../../models/Question";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Answer)
export class AnswerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Question, {
    nullable: true
  })
  async question(@TypeGraphQL.Root() answer: Answer, @TypeGraphQL.Ctx() ctx: any): Promise<Question | null> {
    return getPrismaFromContext(ctx).answer.findUnique({
      where: {
        id: answer.id,
      },
    }).question({});
  }
}
