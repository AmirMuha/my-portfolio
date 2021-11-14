import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SketchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SketchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SketchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SketchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  summary?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  downloadables?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  image?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  project_id?: StringWithAggregatesFilter | undefined;
}
