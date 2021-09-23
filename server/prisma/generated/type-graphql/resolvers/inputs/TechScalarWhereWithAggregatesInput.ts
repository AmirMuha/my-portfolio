import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TechScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TechScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TechScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TechScalarWhereWithAggregatesInput[] | undefined;

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
  tech_category_id?: StringWithAggregatesFilter | undefined;
}
