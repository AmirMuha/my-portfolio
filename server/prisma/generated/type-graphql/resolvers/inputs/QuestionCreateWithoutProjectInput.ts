import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateNestedOneWithoutQuestionInput } from "../inputs/AnswerCreateNestedOneWithoutQuestionInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionCreateWithoutProjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question!: string;

  @TypeGraphQL.Field(_type => AnswerCreateNestedOneWithoutQuestionInput, {
    nullable: false
  })
  answer!: AnswerCreateNestedOneWithoutQuestionInput;
}