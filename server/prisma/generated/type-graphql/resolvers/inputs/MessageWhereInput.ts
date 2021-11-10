import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminRelationFilter } from "../inputs/AdminRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageWhereInput {
  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  AND?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  OR?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  NOT?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  subject?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  from?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  files?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  body?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  read_status?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  answer_status?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => AdminRelationFilter, {
    nullable: true
  })
  admin?: AdminRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  admin_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  answeredAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAd?: DateTimeFilter | undefined;
}
