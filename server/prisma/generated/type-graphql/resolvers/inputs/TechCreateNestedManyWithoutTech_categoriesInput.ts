import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCreateManyTech_categoriesInputEnvelope } from "../inputs/TechCreateManyTech_categoriesInputEnvelope";
import { TechCreateOrConnectWithoutTech_categoriesInput } from "../inputs/TechCreateOrConnectWithoutTech_categoriesInput";
import { TechCreateWithoutTech_categoriesInput } from "../inputs/TechCreateWithoutTech_categoriesInput";
import { TechWhereUniqueInput } from "../inputs/TechWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCreateNestedManyWithoutTech_categoriesInput {
  @TypeGraphQL.Field(_type => [TechCreateWithoutTech_categoriesInput], {
    nullable: true
  })
  create?: TechCreateWithoutTech_categoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCreateOrConnectWithoutTech_categoriesInput], {
    nullable: true
  })
  connectOrCreate?: TechCreateOrConnectWithoutTech_categoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => TechCreateManyTech_categoriesInputEnvelope, {
    nullable: true
  })
  createMany?: TechCreateManyTech_categoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TechWhereUniqueInput], {
    nullable: true
  })
  connect?: TechWhereUniqueInput[] | undefined;
}
