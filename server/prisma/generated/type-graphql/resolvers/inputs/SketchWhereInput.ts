import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchWhereInput {
  @TypeGraphQL.Field(_type => [SketchWhereInput], {
    nullable: true
  })
  AND?: SketchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchWhereInput], {
    nullable: true
  })
  OR?: SketchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchWhereInput], {
    nullable: true
  })
  NOT?: SketchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  summary?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  downloadables?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  project_id?: StringFilter | undefined;
}
