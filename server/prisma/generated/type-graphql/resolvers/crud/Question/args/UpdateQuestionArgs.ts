import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionUpdateInput } from "../../../inputs/QuestionUpdateInput";
import { QuestionWhereUniqueInput } from "../../../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateQuestionArgs {
  @TypeGraphQL.Field(_type => QuestionUpdateInput, {
    nullable: false
  })
  data!: QuestionUpdateInput;

  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;
}
