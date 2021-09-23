import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCreateManyTech_categoriesInputEnvelope } from "../inputs/TechCreateManyTech_categoriesInputEnvelope";
import { TechCreateOrConnectWithoutTech_categoriesInput } from "../inputs/TechCreateOrConnectWithoutTech_categoriesInput";
import { TechCreateWithoutTech_categoriesInput } from "../inputs/TechCreateWithoutTech_categoriesInput";
import { TechScalarWhereInput } from "../inputs/TechScalarWhereInput";
import { TechUpdateManyWithWhereWithoutTech_categoriesInput } from "../inputs/TechUpdateManyWithWhereWithoutTech_categoriesInput";
import { TechUpdateWithWhereUniqueWithoutTech_categoriesInput } from "../inputs/TechUpdateWithWhereUniqueWithoutTech_categoriesInput";
import { TechUpsertWithWhereUniqueWithoutTech_categoriesInput } from "../inputs/TechUpsertWithWhereUniqueWithoutTech_categoriesInput";
import { TechWhereUniqueInput } from "../inputs/TechWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechUpdateManyWithoutTech_categoriesInput {
  @TypeGraphQL.Field(_type => [TechCreateWithoutTech_categoriesInput], {
    nullable: true
  })
  create?: TechCreateWithoutTech_categoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCreateOrConnectWithoutTech_categoriesInput], {
    nullable: true
  })
  connectOrCreate?: TechCreateOrConnectWithoutTech_categoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechUpsertWithWhereUniqueWithoutTech_categoriesInput], {
    nullable: true
  })
  upsert?: TechUpsertWithWhereUniqueWithoutTech_categoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => TechCreateManyTech_categoriesInputEnvelope, {
    nullable: true
  })
  createMany?: TechCreateManyTech_categoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TechWhereUniqueInput], {
    nullable: true
  })
  connect?: TechWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechWhereUniqueInput], {
    nullable: true
  })
  set?: TechWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TechWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechWhereUniqueInput], {
    nullable: true
  })
  delete?: TechWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechUpdateWithWhereUniqueWithoutTech_categoriesInput], {
    nullable: true
  })
  update?: TechUpdateWithWhereUniqueWithoutTech_categoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechUpdateManyWithWhereWithoutTech_categoriesInput], {
    nullable: true
  })
  updateMany?: TechUpdateManyWithWhereWithoutTech_categoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TechScalarWhereInput[] | undefined;
}
