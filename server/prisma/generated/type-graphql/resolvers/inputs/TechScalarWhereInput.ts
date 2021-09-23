import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechScalarWhereInput {
  @TypeGraphQL.Field(_type => [TechScalarWhereInput], {
    nullable: true
  })
  AND?: TechScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechScalarWhereInput], {
    nullable: true
  })
  OR?: TechScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechScalarWhereInput], {
    nullable: true
  })
  NOT?: TechScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tech_category_id?: StringFilter | undefined;
}
