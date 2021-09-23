import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateOrConnectWithoutTechsInput } from "../inputs/TechCategoryCreateOrConnectWithoutTechsInput";
import { TechCategoryCreateWithoutTechsInput } from "../inputs/TechCategoryCreateWithoutTechsInput";
import { TechCategoryUpdateWithoutTechsInput } from "../inputs/TechCategoryUpdateWithoutTechsInput";
import { TechCategoryUpsertWithoutTechsInput } from "../inputs/TechCategoryUpsertWithoutTechsInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryUpdateOneRequiredWithoutTechsInput {
  @TypeGraphQL.Field(_type => TechCategoryCreateWithoutTechsInput, {
    nullable: true
  })
  create?: TechCategoryCreateWithoutTechsInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryCreateOrConnectWithoutTechsInput, {
    nullable: true
  })
  connectOrCreate?: TechCategoryCreateOrConnectWithoutTechsInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryUpsertWithoutTechsInput, {
    nullable: true
  })
  upsert?: TechCategoryUpsertWithoutTechsInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: TechCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryUpdateWithoutTechsInput, {
    nullable: true
  })
  update?: TechCategoryUpdateWithoutTechsInput | undefined;
}
