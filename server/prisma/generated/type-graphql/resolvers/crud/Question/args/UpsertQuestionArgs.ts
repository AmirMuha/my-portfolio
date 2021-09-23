import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionCreateInput } from "../../../inputs/QuestionCreateInput";
import { QuestionUpdateInput } from "../../../inputs/QuestionUpdateInput";
import { QuestionWhereUniqueInput } from "../../../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertQuestionArgs {
  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuestionCreateInput, {
    nullable: false
  })
  create!: QuestionCreateInput;

  @TypeGraphQL.Field(_type => QuestionUpdateInput, {
    nullable: false
  })
  update!: QuestionUpdateInput;
}
