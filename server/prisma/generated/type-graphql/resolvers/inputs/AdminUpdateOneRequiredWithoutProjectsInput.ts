import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateOrConnectWithoutProjectsInput } from "../inputs/AdminCreateOrConnectWithoutProjectsInput";
import { AdminCreateWithoutProjectsInput } from "../inputs/AdminCreateWithoutProjectsInput";
import { AdminUpdateWithoutProjectsInput } from "../inputs/AdminUpdateWithoutProjectsInput";
import { AdminUpsertWithoutProjectsInput } from "../inputs/AdminUpsertWithoutProjectsInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminUpdateOneRequiredWithoutProjectsInput {
  @TypeGraphQL.Field(_type => AdminCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: AdminCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: AdminCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => AdminUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: AdminUpsertWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: true
  })
  connect?: AdminWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AdminUpdateWithoutProjectsInput, {
    nullable: true
  })
  update?: AdminUpdateWithoutProjectsInput | undefined;
}
