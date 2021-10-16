import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutSketchesInput } from "../inputs/ProjectCreateNestedOneWithoutSketchesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  summary!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  download_link!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutSketchesInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutSketchesInput;
}
