import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { TechCategoryRelationFilter } from "../inputs/TechCategoryRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechWhereInput {
  @TypeGraphQL.Field(_type => [TechWhereInput], {
    nullable: true
  })
  AND?: TechWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechWhereInput], {
    nullable: true
  })
  OR?: TechWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechWhereInput], {
    nullable: true
  })
  NOT?: TechWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TechCategoryRelationFilter, {
    nullable: true
  })
  tech_categories?: TechCategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tech_category_id?: StringFilter | undefined;
}
