import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyAdminInputEnvelope } from "../inputs/ProjectCreateManyAdminInputEnvelope";
import { ProjectCreateOrConnectWithoutAdminInput } from "../inputs/ProjectCreateOrConnectWithoutAdminInput";
import { ProjectCreateWithoutAdminInput } from "../inputs/ProjectCreateWithoutAdminInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutAdminInput } from "../inputs/ProjectUpdateManyWithWhereWithoutAdminInput";
import { ProjectUpdateWithWhereUniqueWithoutAdminInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutAdminInput";
import { ProjectUpsertWithWhereUniqueWithoutAdminInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutAdminInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateManyWithoutAdminInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutAdminInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutAdminInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutAdminInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyAdminInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyAdminInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutAdminInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutAdminInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
