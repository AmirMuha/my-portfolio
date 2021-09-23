import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutCreateManyAdminInputEnvelope } from "../inputs/AboutCreateManyAdminInputEnvelope";
import { AboutCreateOrConnectWithoutAdminInput } from "../inputs/AboutCreateOrConnectWithoutAdminInput";
import { AboutCreateWithoutAdminInput } from "../inputs/AboutCreateWithoutAdminInput";
import { AboutScalarWhereInput } from "../inputs/AboutScalarWhereInput";
import { AboutUpdateManyWithWhereWithoutAdminInput } from "../inputs/AboutUpdateManyWithWhereWithoutAdminInput";
import { AboutUpdateWithWhereUniqueWithoutAdminInput } from "../inputs/AboutUpdateWithWhereUniqueWithoutAdminInput";
import { AboutUpsertWithWhereUniqueWithoutAdminInput } from "../inputs/AboutUpsertWithWhereUniqueWithoutAdminInput";
import { AboutWhereUniqueInput } from "../inputs/AboutWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutUpdateManyWithoutAdminInput {
  @TypeGraphQL.Field(_type => [AboutCreateWithoutAdminInput], {
    nullable: true
  })
  create?: AboutCreateWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutCreateOrConnectWithoutAdminInput], {
    nullable: true
  })
  connectOrCreate?: AboutCreateOrConnectWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutUpsertWithWhereUniqueWithoutAdminInput], {
    nullable: true
  })
  upsert?: AboutUpsertWithWhereUniqueWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => AboutCreateManyAdminInputEnvelope, {
    nullable: true
  })
  createMany?: AboutCreateManyAdminInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AboutWhereUniqueInput], {
    nullable: true
  })
  connect?: AboutWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutWhereUniqueInput], {
    nullable: true
  })
  set?: AboutWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AboutWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutWhereUniqueInput], {
    nullable: true
  })
  delete?: AboutWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutUpdateWithWhereUniqueWithoutAdminInput], {
    nullable: true
  })
  update?: AboutUpdateWithWhereUniqueWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutUpdateManyWithWhereWithoutAdminInput], {
    nullable: true
  })
  updateMany?: AboutUpdateManyWithWhereWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AboutScalarWhereInput[] | undefined;
}
