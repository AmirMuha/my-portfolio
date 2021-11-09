import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminUpdateOneRequiredWithoutStackInput } from "../inputs/AdminUpdateOneRequiredWithoutStackInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AdminUpdateOneRequiredWithoutStackInput, {
    nullable: true
  })
  admin?: AdminUpdateOneRequiredWithoutStackInput | undefined;
}
