import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateWithoutMessagesInput } from "../inputs/AdminCreateWithoutMessagesInput";
import { AdminUpdateWithoutMessagesInput } from "../inputs/AdminUpdateWithoutMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminUpsertWithoutMessagesInput {
  @TypeGraphQL.Field(_type => AdminUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: AdminUpdateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => AdminCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: AdminCreateWithoutMessagesInput;
}
