import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TechCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TechCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TechCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TechCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  project_id?: StringWithAggregatesFilter | undefined;
}
