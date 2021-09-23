import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutScalarWhereInput {
  @TypeGraphQL.Field(_type => [AboutScalarWhereInput], {
    nullable: true
  })
  AND?: AboutScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutScalarWhereInput], {
    nullable: true
  })
  OR?: AboutScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutScalarWhereInput], {
    nullable: true
  })
  NOT?: AboutScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  admin_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
