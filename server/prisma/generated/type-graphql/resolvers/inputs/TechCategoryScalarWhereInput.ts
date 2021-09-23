import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [TechCategoryScalarWhereInput], {
    nullable: true
  })
  AND?: TechCategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryScalarWhereInput], {
    nullable: true
  })
  OR?: TechCategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryScalarWhereInput], {
    nullable: true
  })
  NOT?: TechCategoryScalarWhereInput[] | undefined;

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
  project_id?: StringFilter | undefined;
}
