import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutQuestionsInput } from "../inputs/ProjectCreateOrConnectWithoutQuestionsInput";
import { ProjectCreateWithoutQuestionsInput } from "../inputs/ProjectCreateWithoutQuestionsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutQuestionsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutQuestionsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutQuestionsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
