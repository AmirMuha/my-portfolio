import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateWithoutAnswerInput } from "../inputs/QuestionCreateWithoutAnswerInput";
import { QuestionUpdateWithoutAnswerInput } from "../inputs/QuestionUpdateWithoutAnswerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionUpsertWithoutAnswerInput {
  @TypeGraphQL.Field(_type => QuestionUpdateWithoutAnswerInput, {
    nullable: false
  })
  update!: QuestionUpdateWithoutAnswerInput;

  @TypeGraphQL.Field(_type => QuestionCreateWithoutAnswerInput, {
    nullable: false
  })
  create!: QuestionCreateWithoutAnswerInput;
}
