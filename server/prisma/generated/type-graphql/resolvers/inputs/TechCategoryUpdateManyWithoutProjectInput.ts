import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateManyProjectInputEnvelope } from "../inputs/TechCategoryCreateManyProjectInputEnvelope";
import { TechCategoryCreateOrConnectWithoutProjectInput } from "../inputs/TechCategoryCreateOrConnectWithoutProjectInput";
import { TechCategoryCreateWithoutProjectInput } from "../inputs/TechCategoryCreateWithoutProjectInput";
import { TechCategoryScalarWhereInput } from "../inputs/TechCategoryScalarWhereInput";
import { TechCategoryUpdateManyWithWhereWithoutProjectInput } from "../inputs/TechCategoryUpdateManyWithWhereWithoutProjectInput";
import { TechCategoryUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/TechCategoryUpdateWithWhereUniqueWithoutProjectInput";
import { TechCategoryUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/TechCategoryUpsertWithWhereUniqueWithoutProjectInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [TechCategoryCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TechCategoryCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TechCategoryCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: TechCategoryUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => TechCategoryCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TechCategoryCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: TechCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryWhereUniqueInput], {
    nullable: true
  })
  set?: TechCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TechCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: TechCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: TechCategoryUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: TechCategoryUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TechCategoryScalarWhereInput[] | undefined;
}
