import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutQuestionsInput } from "../inputs/ProjectCreateOrConnectWithoutQuestionsInput";
import { ProjectCreateWithoutQuestionsInput } from "../inputs/ProjectCreateWithoutQuestionsInput";
import { ProjectUpdateWithoutQuestionsInput } from "../inputs/ProjectUpdateWithoutQuestionsInput";
import { ProjectUpsertWithoutQuestionsInput } from "../inputs/ProjectUpsertWithoutQuestionsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutQuestionsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutQuestionsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutQuestionsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutQuestionsInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutQuestionsInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutQuestionsInput | undefined;
}
