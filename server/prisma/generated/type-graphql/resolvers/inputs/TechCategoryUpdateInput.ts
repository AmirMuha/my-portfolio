import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateOneRequiredWithoutTech_categoriesInput } from "../inputs/ProjectUpdateOneRequiredWithoutTech_categoriesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TechUpdateManyWithoutTech_categoriesInput } from "../inputs/TechUpdateManyWithoutTech_categoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TechUpdateManyWithoutTech_categoriesInput, {
    nullable: true
  })
  techs?: TechUpdateManyWithoutTech_categoriesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutTech_categoriesInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutTech_categoriesInput | undefined;
}
