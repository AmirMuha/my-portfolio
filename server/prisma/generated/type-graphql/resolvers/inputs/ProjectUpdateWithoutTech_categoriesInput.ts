import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminUpdateOneRequiredWithoutProjectsInput } from "../inputs/AdminUpdateOneRequiredWithoutProjectsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { QuestionUpdateManyWithoutProjectInput } from "../inputs/QuestionUpdateManyWithoutProjectInput";
import { SketchUpdateManyWithoutProjectInput } from "../inputs/SketchUpdateManyWithoutProjectInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateWithoutTech_categoriesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  github_url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  app_url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => QuestionUpdateManyWithoutProjectInput, {
    nullable: true
  })
  questions?: QuestionUpdateManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => SketchUpdateManyWithoutProjectInput, {
    nullable: true
  })
  sketches?: SketchUpdateManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => AdminUpdateOneRequiredWithoutProjectsInput, {
    nullable: true
  })
  admin?: AdminUpdateOneRequiredWithoutProjectsInput | undefined;
}
