import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TechListRelationFilter } from "../inputs/TechListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryWhereInput {
  @TypeGraphQL.Field(_type => [TechCategoryWhereInput], {
    nullable: true
  })
  AND?: TechCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryWhereInput], {
    nullable: true
  })
  OR?: TechCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryWhereInput], {
    nullable: true
  })
  NOT?: TechCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TechListRelationFilter, {
    nullable: true
  })
  techs?: TechListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  project_id?: StringFilter | undefined;
}
