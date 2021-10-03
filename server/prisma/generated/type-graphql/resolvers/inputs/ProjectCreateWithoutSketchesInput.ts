import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateNestedOneWithoutProjectsInput } from "../inputs/AdminCreateNestedOneWithoutProjectsInput";
import { QuestionCreateNestedManyWithoutProjectInput } from "../inputs/QuestionCreateNestedManyWithoutProjectInput";
import { TechCategoryCreateNestedManyWithoutProjectInput } from "../inputs/TechCategoryCreateNestedManyWithoutProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateWithoutSketchesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  github_url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  app_url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TechCategoryCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  tech_categories?: TechCategoryCreateNestedManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => QuestionCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  questions?: QuestionCreateNestedManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  admin!: AdminCreateNestedOneWithoutProjectsInput;
}
