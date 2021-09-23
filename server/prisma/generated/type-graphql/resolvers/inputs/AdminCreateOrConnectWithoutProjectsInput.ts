import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateWithoutProjectsInput } from "../inputs/AdminCreateWithoutProjectsInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminCreateOrConnectWithoutProjectsInput {
  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: false
  })
  where!: AdminWhereUniqueInput;

  @TypeGraphQL.Field(_type => AdminCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: AdminCreateWithoutProjectsInput;
}
