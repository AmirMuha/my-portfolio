import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyAdminInputEnvelope } from "../inputs/MessageCreateManyAdminInputEnvelope";
import { MessageCreateOrConnectWithoutAdminInput } from "../inputs/MessageCreateOrConnectWithoutAdminInput";
import { MessageCreateWithoutAdminInput } from "../inputs/MessageCreateWithoutAdminInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutAdminInput } from "../inputs/MessageUpdateManyWithWhereWithoutAdminInput";
import { MessageUpdateWithWhereUniqueWithoutAdminInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutAdminInput";
import { MessageUpsertWithWhereUniqueWithoutAdminInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutAdminInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateManyWithoutAdminInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutAdminInput], {
    nullable: true
  })
  create?: MessageCreateWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutAdminInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutAdminInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyAdminInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyAdminInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  set?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  delete?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutAdminInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutAdminInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
