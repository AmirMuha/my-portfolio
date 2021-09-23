import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateWithoutAnswerInput } from "../inputs/QuestionCreateWithoutAnswerInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionCreateOrConnectWithoutAnswerInput {
  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuestionCreateWithoutAnswerInput, {
    nullable: false
  })
  create!: QuestionCreateWithoutAnswerInput;
}
