import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateOrConnectWithoutStackInput } from "../inputs/AdminCreateOrConnectWithoutStackInput";
import { AdminCreateWithoutStackInput } from "../inputs/AdminCreateWithoutStackInput";
import { AdminUpdateWithoutStackInput } from "../inputs/AdminUpdateWithoutStackInput";
import { AdminUpsertWithoutStackInput } from "../inputs/AdminUpsertWithoutStackInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminUpdateOneRequiredWithoutStackInput {
  @TypeGraphQL.Field(_type => AdminCreateWithoutStackInput, {
    nullable: true
  })
  create?: AdminCreateWithoutStackInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutStackInput, {
    nullable: true
  })
  connectOrCreate?: AdminCreateOrConnectWithoutStackInput | undefined;

  @TypeGraphQL.Field(_type => AdminUpsertWithoutStackInput, {
    nullable: true
  })
  upsert?: AdminUpsertWithoutStackInput | undefined;

  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: true
  })
  connect?: AdminWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AdminUpdateWithoutStackInput, {
    nullable: true
  })
  update?: AdminUpdateWithoutStackInput | undefined;
}
