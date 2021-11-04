import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionOrderByWithRelationInput } from "../../../inputs/QuestionOrderByWithRelationInput";
import { QuestionWhereInput } from "../../../inputs/QuestionWhereInput";
import { QuestionWhereUniqueInput } from "../../../inputs/QuestionWhereUniqueInput";
import { QuestionScalarFieldEnum } from "../../../../enums/QuestionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ProjectQuestionsArgs {
  @TypeGraphQL.Field(_type => QuestionWhereInput, {
    nullable: true
  })
  where?: QuestionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [QuestionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: QuestionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: true
  })
  cursor?: QuestionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "question" | "answer" | "project_id"> | undefined;
}
