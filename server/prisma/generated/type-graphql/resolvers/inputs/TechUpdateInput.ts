import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TechCategoryUpdateOneRequiredWithoutTechsInput } from "../inputs/TechCategoryUpdateOneRequiredWithoutTechsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryUpdateOneRequiredWithoutTechsInput, {
    nullable: true
  })
  tech_categories?: TechCategoryUpdateOneRequiredWithoutTechsInput | undefined;
}
