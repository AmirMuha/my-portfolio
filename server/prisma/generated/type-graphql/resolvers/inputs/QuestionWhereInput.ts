import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionWhereInput {
  @TypeGraphQL.Field(_type => [QuestionWhereInput], {
    nullable: true
  })
  AND?: QuestionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereInput], {
    nullable: true
  })
  OR?: QuestionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereInput], {
    nullable: true
  })
  NOT?: QuestionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  question?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  answer?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  project_id?: StringFilter | undefined;
}
