import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionOrderByWithAggregationInput } from "../../../inputs/QuestionOrderByWithAggregationInput";
import { QuestionScalarWhereWithAggregatesInput } from "../../../inputs/QuestionScalarWhereWithAggregatesInput";
import { QuestionWhereInput } from "../../../inputs/QuestionWhereInput";
import { QuestionScalarFieldEnum } from "../../../../enums/QuestionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByQuestionArgs {
  @TypeGraphQL.Field(_type => QuestionWhereInput, {
    nullable: true
  })
  where?: QuestionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [QuestionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: QuestionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "question" | "answer_id" | "project_id">;

  @TypeGraphQL.Field(_type => QuestionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: QuestionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
