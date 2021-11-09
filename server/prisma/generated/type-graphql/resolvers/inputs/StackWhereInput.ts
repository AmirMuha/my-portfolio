import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminRelationFilter } from "../inputs/AdminRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackWhereInput {
  @TypeGraphQL.Field(_type => [StackWhereInput], {
    nullable: true
  })
  AND?: StackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackWhereInput], {
    nullable: true
  })
  OR?: StackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackWhereInput], {
    nullable: true
  })
  NOT?: StackWhereInput[] | undefined;

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
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AdminRelationFilter, {
    nullable: true
  })
  admin?: AdminRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  admin_id?: StringFilter | undefined;
}
