import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminRelationFilter } from "../inputs/AdminRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { QuestionListRelationFilter } from "../inputs/QuestionListRelationFilter";
import { SketchListRelationFilter } from "../inputs/SketchListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TechCategoryListRelationFilter } from "../inputs/TechCategoryListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectWhereInput {
  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  AND?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  OR?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  NOT?: ProjectWhereInput[] | undefined;

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
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  github_url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  app_url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TechCategoryListRelationFilter, {
    nullable: true
  })
  tech_categories?: TechCategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => QuestionListRelationFilter, {
    nullable: true
  })
  questions?: QuestionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SketchListRelationFilter, {
    nullable: true
  })
  sketches?: SketchListRelationFilter | undefined;

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
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
