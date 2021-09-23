import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateOrConnectWithoutAboutInput } from "../inputs/AdminCreateOrConnectWithoutAboutInput";
import { AdminCreateWithoutAboutInput } from "../inputs/AdminCreateWithoutAboutInput";
import { AdminUpdateWithoutAboutInput } from "../inputs/AdminUpdateWithoutAboutInput";
import { AdminUpsertWithoutAboutInput } from "../inputs/AdminUpsertWithoutAboutInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminUpdateOneRequiredWithoutAboutInput {
  @TypeGraphQL.Field(_type => AdminCreateWithoutAboutInput, {
    nullable: true
  })
  create?: AdminCreateWithoutAboutInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutAboutInput, {
    nullable: true
  })
  connectOrCreate?: AdminCreateOrConnectWithoutAboutInput | undefined;

  @TypeGraphQL.Field(_type => AdminUpsertWithoutAboutInput, {
    nullable: true
  })
  upsert?: AdminUpsertWithoutAboutInput | undefined;

  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: true
  })
  connect?: AdminWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AdminUpdateWithoutAboutInput, {
    nullable: true
  })
  update?: AdminUpdateWithoutAboutInput | undefined;
}
