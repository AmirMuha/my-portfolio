import * as TypeGraphQL from "type-graphql";
import { Answer } from "../../../models/Answer";
import { Project } from "../../../models/Project";
import { Question } from "../../../models/Question";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Question)
export class QuestionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Answer, {
    nullable: false
  })
  async answer(@TypeGraphQL.Root() question: Question, @TypeGraphQL.Ctx() ctx: any): Promise<Answer> {
    return getPrismaFromContext(ctx).question.findUnique({
      where: {
        id: question.id,
      },
    }).answer({});
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() question: Question, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).question.findUnique({
      where: {
        id: question.id,
      },
    }).project({});
  }
}
