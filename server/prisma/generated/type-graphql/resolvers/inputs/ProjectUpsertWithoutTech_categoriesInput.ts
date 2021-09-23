import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutTech_categoriesInput } from "../inputs/ProjectCreateWithoutTech_categoriesInput";
import { ProjectUpdateWithoutTech_categoriesInput } from "../inputs/ProjectUpdateWithoutTech_categoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithoutTech_categoriesInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTech_categoriesInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutTech_categoriesInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutTech_categoriesInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutTech_categoriesInput;
}
