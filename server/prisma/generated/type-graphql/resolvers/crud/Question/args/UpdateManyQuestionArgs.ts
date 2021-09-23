import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionUpdateManyMutationInput } from "../../../inputs/QuestionUpdateManyMutationInput";
import { QuestionWhereInput } from "../../../inputs/QuestionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyQuestionArgs {
  @TypeGraphQL.Field(_type => QuestionUpdateManyMutationInput, {
    nullable: false
  })
  data!: QuestionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => QuestionWhereInput, {
    nullable: true
  })
  where?: QuestionWhereInput | undefined;
}
