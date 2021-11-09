import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackUpdateWithoutAdminInput } from "../inputs/StackUpdateWithoutAdminInput";
import { StackWhereUniqueInput } from "../inputs/StackWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackUpdateWithWhereUniqueWithoutAdminInput {
  @TypeGraphQL.Field(_type => StackWhereUniqueInput, {
    nullable: false
  })
  where!: StackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StackUpdateWithoutAdminInput, {
    nullable: false
  })
  data!: StackUpdateWithoutAdminInput;
}
