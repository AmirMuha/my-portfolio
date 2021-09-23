import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutQuestionsInput } from "../inputs/ProjectCreateWithoutQuestionsInput";
import { ProjectUpdateWithoutQuestionsInput } from "../inputs/ProjectUpdateWithoutQuestionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithoutQuestionsInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutQuestionsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutQuestionsInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutQuestionsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutQuestionsInput;
}
