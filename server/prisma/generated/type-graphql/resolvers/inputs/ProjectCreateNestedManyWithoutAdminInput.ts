import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyAdminInputEnvelope } from "../inputs/ProjectCreateManyAdminInputEnvelope";
import { ProjectCreateOrConnectWithoutAdminInput } from "../inputs/ProjectCreateOrConnectWithoutAdminInput";
import { ProjectCreateWithoutAdminInput } from "../inputs/ProjectCreateWithoutAdminInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutAdminInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutAdminInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutAdminInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyAdminInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyAdminInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
