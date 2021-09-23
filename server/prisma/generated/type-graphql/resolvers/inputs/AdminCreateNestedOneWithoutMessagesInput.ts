import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateOrConnectWithoutMessagesInput } from "../inputs/AdminCreateOrConnectWithoutMessagesInput";
import { AdminCreateWithoutMessagesInput } from "../inputs/AdminCreateWithoutMessagesInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminCreateNestedOneWithoutMessagesInput {
  @TypeGraphQL.Field(_type => AdminCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: AdminCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: AdminCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: true
  })
  connect?: AdminWhereUniqueInput | undefined;
}
