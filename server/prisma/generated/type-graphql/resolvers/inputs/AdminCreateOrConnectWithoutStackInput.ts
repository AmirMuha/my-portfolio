import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateWithoutStackInput } from "../inputs/AdminCreateWithoutStackInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminCreateOrConnectWithoutStackInput {
  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: false
  })
  where!: AdminWhereUniqueInput;

  @TypeGraphQL.Field(_type => AdminCreateWithoutStackInput, {
    nullable: false
  })
  create!: AdminCreateWithoutStackInput;
}
