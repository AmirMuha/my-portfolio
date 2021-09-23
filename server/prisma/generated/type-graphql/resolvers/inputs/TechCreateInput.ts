import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateNestedOneWithoutTechsInput } from "../inputs/TechCategoryCreateNestedOneWithoutTechsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TechCategoryCreateNestedOneWithoutTechsInput, {
    nullable: false
  })
  tech_categories!: TechCategoryCreateNestedOneWithoutTechsInput;
}
