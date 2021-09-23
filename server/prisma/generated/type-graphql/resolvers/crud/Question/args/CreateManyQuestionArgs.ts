import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionCreateManyInput } from "../../../inputs/QuestionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyQuestionArgs {
  @TypeGraphQL.Field(_type => [QuestionCreateManyInput], {
    nullable: false
  })
  data!: QuestionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
