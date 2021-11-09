import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackCreateManyAdminInputEnvelope } from "../inputs/StackCreateManyAdminInputEnvelope";
import { StackCreateOrConnectWithoutAdminInput } from "../inputs/StackCreateOrConnectWithoutAdminInput";
import { StackCreateWithoutAdminInput } from "../inputs/StackCreateWithoutAdminInput";
import { StackWhereUniqueInput } from "../inputs/StackWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackCreateNestedManyWithoutAdminInput {
  @TypeGraphQL.Field(_type => [StackCreateWithoutAdminInput], {
    nullable: true
  })
  create?: StackCreateWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackCreateOrConnectWithoutAdminInput], {
    nullable: true
  })
  connectOrCreate?: StackCreateOrConnectWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => StackCreateManyAdminInputEnvelope, {
    nullable: true
  })
  createMany?: StackCreateManyAdminInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StackWhereUniqueInput], {
    nullable: true
  })
  connect?: StackWhereUniqueInput[] | undefined;
}
