import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutAdminInput } from "../inputs/ProjectCreateWithoutAdminInput";
import { ProjectUpdateWithoutAdminInput } from "../inputs/ProjectUpdateWithoutAdminInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutAdminInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutAdminInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutAdminInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutAdminInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutAdminInput;
}
