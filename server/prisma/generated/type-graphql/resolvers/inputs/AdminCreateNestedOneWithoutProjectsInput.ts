import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateOrConnectWithoutProjectsInput } from "../inputs/AdminCreateOrConnectWithoutProjectsInput";
import { AdminCreateWithoutProjectsInput } from "../inputs/AdminCreateWithoutProjectsInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminCreateNestedOneWithoutProjectsInput {
  @TypeGraphQL.Field(_type => AdminCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: AdminCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: AdminCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: true
  })
  connect?: AdminWhereUniqueInput | undefined;
}
