import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateOrConnectWithoutStackInput } from "../inputs/AdminCreateOrConnectWithoutStackInput";
import { AdminCreateWithoutStackInput } from "../inputs/AdminCreateWithoutStackInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminCreateNestedOneWithoutStackInput {
  @TypeGraphQL.Field(_type => AdminCreateWithoutStackInput, {
    nullable: true
  })
  create?: AdminCreateWithoutStackInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutStackInput, {
    nullable: true
  })
  connectOrCreate?: AdminCreateOrConnectWithoutStackInput | undefined;

  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: true
  })
  connect?: AdminWhereUniqueInput | undefined;
}
