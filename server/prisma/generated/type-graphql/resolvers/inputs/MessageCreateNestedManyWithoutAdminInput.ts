import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyAdminInputEnvelope } from "../inputs/MessageCreateManyAdminInputEnvelope";
import { MessageCreateOrConnectWithoutAdminInput } from "../inputs/MessageCreateOrConnectWithoutAdminInput";
import { MessageCreateWithoutAdminInput } from "../inputs/MessageCreateWithoutAdminInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateNestedManyWithoutAdminInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutAdminInput], {
    nullable: true
  })
  create?: MessageCreateWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutAdminInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyAdminInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyAdminInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
