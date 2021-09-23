import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerUpdateOneRequiredWithoutQuestionInput } from "../inputs/AnswerUpdateOneRequiredWithoutQuestionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionUpdateWithoutProjectInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  question?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AnswerUpdateOneRequiredWithoutQuestionInput, {
    nullable: true
  })
  answer?: AnswerUpdateOneRequiredWithoutQuestionInput | undefined;
}
