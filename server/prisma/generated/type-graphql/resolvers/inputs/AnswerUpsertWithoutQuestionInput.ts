import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateWithoutQuestionInput } from "../inputs/AnswerCreateWithoutQuestionInput";
import { AnswerUpdateWithoutQuestionInput } from "../inputs/AnswerUpdateWithoutQuestionInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnswerUpsertWithoutQuestionInput {
  @TypeGraphQL.Field(_type => AnswerUpdateWithoutQuestionInput, {
    nullable: false
  })
  update!: AnswerUpdateWithoutQuestionInput;

  @TypeGraphQL.Field(_type => AnswerCreateWithoutQuestionInput, {
    nullable: false
  })
  create!: AnswerCreateWithoutQuestionInput;
}
