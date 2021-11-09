import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackCreateManyAdminInputEnvelope } from "../inputs/StackCreateManyAdminInputEnvelope";
import { StackCreateOrConnectWithoutAdminInput } from "../inputs/StackCreateOrConnectWithoutAdminInput";
import { StackCreateWithoutAdminInput } from "../inputs/StackCreateWithoutAdminInput";
import { StackScalarWhereInput } from "../inputs/StackScalarWhereInput";
import { StackUpdateManyWithWhereWithoutAdminInput } from "../inputs/StackUpdateManyWithWhereWithoutAdminInput";
import { StackUpdateWithWhereUniqueWithoutAdminInput } from "../inputs/StackUpdateWithWhereUniqueWithoutAdminInput";
import { StackUpsertWithWhereUniqueWithoutAdminInput } from "../inputs/StackUpsertWithWhereUniqueWithoutAdminInput";
import { StackWhereUniqueInput } from "../inputs/StackWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackUpdateManyWithoutAdminInput {
  @TypeGraphQL.Field(_type => [StackCreateWithoutAdminInput], {
    nullable: true
  })
  create?: StackCreateWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackCreateOrConnectWithoutAdminInput], {
    nullable: true
  })
  connectOrCreate?: StackCreateOrConnectWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackUpsertWithWhereUniqueWithoutAdminInput], {
    nullable: true
  })
  upsert?: StackUpsertWithWhereUniqueWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => StackCreateManyAdminInputEnvelope, {
    nullable: true
  })
  createMany?: StackCreateManyAdminInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StackWhereUniqueInput], {
    nullable: true
  })
  connect?: StackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackWhereUniqueInput], {
    nullable: true
  })
  set?: StackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackWhereUniqueInput], {
    nullable: true
  })
  delete?: StackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackUpdateWithWhereUniqueWithoutAdminInput], {
    nullable: true
  })
  update?: StackUpdateWithWhereUniqueWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackUpdateManyWithWhereWithoutAdminInput], {
    nullable: true
  })
  updateMany?: StackUpdateManyWithWhereWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StackScalarWhereInput[] | undefined;
}
