import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateOrConnectWithoutTechsInput } from "../inputs/TechCategoryCreateOrConnectWithoutTechsInput";
import { TechCategoryCreateWithoutTechsInput } from "../inputs/TechCategoryCreateWithoutTechsInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryCreateNestedOneWithoutTechsInput {
  @TypeGraphQL.Field(_type => TechCategoryCreateWithoutTechsInput, {
    nullable: true
  })
  create?: TechCategoryCreateWithoutTechsInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryCreateOrConnectWithoutTechsInput, {
    nullable: true
  })
  connectOrCreate?: TechCategoryCreateOrConnectWithoutTechsInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: TechCategoryWhereUniqueInput | undefined;
}
