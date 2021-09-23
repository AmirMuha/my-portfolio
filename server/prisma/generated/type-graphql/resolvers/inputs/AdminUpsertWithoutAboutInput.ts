import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateWithoutAboutInput } from "../inputs/AdminCreateWithoutAboutInput";
import { AdminUpdateWithoutAboutInput } from "../inputs/AdminUpdateWithoutAboutInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminUpsertWithoutAboutInput {
  @TypeGraphQL.Field(_type => AdminUpdateWithoutAboutInput, {
    nullable: false
  })
  update!: AdminUpdateWithoutAboutInput;

  @TypeGraphQL.Field(_type => AdminCreateWithoutAboutInput, {
    nullable: false
  })
  create!: AdminCreateWithoutAboutInput;
}
