import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminRelationFilter } from "../inputs/AdminRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutWhereInput {
  @TypeGraphQL.Field(_type => [AboutWhereInput], {
    nullable: true
  })
  AND?: AboutWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutWhereInput], {
    nullable: true
  })
  OR?: AboutWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutWhereInput], {
    nullable: true
  })
  NOT?: AboutWhereInput[] | undefined;

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
  body?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AdminRelationFilter, {
    nullable: true
  })
  admin?: AdminRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  admin_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
