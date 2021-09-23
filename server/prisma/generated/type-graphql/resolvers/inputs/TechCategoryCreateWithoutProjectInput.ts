import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCreateNestedManyWithoutTech_categoriesInput } from "../inputs/TechCreateNestedManyWithoutTech_categoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryCreateWithoutProjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TechCreateNestedManyWithoutTech_categoriesInput, {
    nullable: true
  })
  techs?: TechCreateNestedManyWithoutTech_categoriesInput | undefined;
}
