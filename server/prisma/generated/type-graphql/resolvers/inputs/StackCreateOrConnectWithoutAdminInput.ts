import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackCreateWithoutAdminInput } from "../inputs/StackCreateWithoutAdminInput";
import { StackWhereUniqueInput } from "../inputs/StackWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackCreateOrConnectWithoutAdminInput {
  @TypeGraphQL.Field(_type => StackWhereUniqueInput, {
    nullable: false
  })
  where!: StackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StackCreateWithoutAdminInput, {
    nullable: false
  })
  create!: StackCreateWithoutAdminInput;
}
