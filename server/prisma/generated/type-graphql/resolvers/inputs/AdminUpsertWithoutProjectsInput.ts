import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateWithoutProjectsInput } from "../inputs/AdminCreateWithoutProjectsInput";
import { AdminUpdateWithoutProjectsInput } from "../inputs/AdminUpdateWithoutProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminUpsertWithoutProjectsInput {
  @TypeGraphQL.Field(_type => AdminUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: AdminUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => AdminCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: AdminCreateWithoutProjectsInput;
}
