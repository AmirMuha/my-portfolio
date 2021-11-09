import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateWithoutStackInput } from "../inputs/AdminCreateWithoutStackInput";
import { AdminUpdateWithoutStackInput } from "../inputs/AdminUpdateWithoutStackInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminUpsertWithoutStackInput {
  @TypeGraphQL.Field(_type => AdminUpdateWithoutStackInput, {
    nullable: false
  })
  update!: AdminUpdateWithoutStackInput;

  @TypeGraphQL.Field(_type => AdminCreateWithoutStackInput, {
    nullable: false
  })
  create!: AdminCreateWithoutStackInput;
}
