import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AboutScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AboutScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AboutScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AboutScalarWhereWithAggregatesInput[] | undefined;

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
  body?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  admin_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
