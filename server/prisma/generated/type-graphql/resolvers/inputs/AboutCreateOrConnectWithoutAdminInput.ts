import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutCreateWithoutAdminInput } from "../inputs/AboutCreateWithoutAdminInput";
import { AboutWhereUniqueInput } from "../inputs/AboutWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutCreateOrConnectWithoutAdminInput {
  @TypeGraphQL.Field(_type => AboutWhereUniqueInput, {
    nullable: false
  })
  where!: AboutWhereUniqueInput;

  @TypeGraphQL.Field(_type => AboutCreateWithoutAdminInput, {
    nullable: false
  })
  create!: AboutCreateWithoutAdminInput;
}
