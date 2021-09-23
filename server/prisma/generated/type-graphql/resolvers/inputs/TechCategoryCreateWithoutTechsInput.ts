import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutTech_categoriesInput } from "../inputs/ProjectCreateNestedOneWithoutTech_categoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryCreateWithoutTechsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutTech_categoriesInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutTech_categoriesInput;
}
