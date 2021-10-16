import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchScalarWhereInput {
  @TypeGraphQL.Field(_type => [SketchScalarWhereInput], {
    nullable: true
  })
  AND?: SketchScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchScalarWhereInput], {
    nullable: true
  })
  OR?: SketchScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchScalarWhereInput], {
    nullable: true
  })
  NOT?: SketchScalarWhereInput[] | undefined;

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
  download_link?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  project_id?: StringFilter | undefined;
}
