import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchCreateManyProjectInputEnvelope } from "../inputs/SketchCreateManyProjectInputEnvelope";
import { SketchCreateOrConnectWithoutProjectInput } from "../inputs/SketchCreateOrConnectWithoutProjectInput";
import { SketchCreateWithoutProjectInput } from "../inputs/SketchCreateWithoutProjectInput";
import { SketchScalarWhereInput } from "../inputs/SketchScalarWhereInput";
import { SketchUpdateManyWithWhereWithoutProjectInput } from "../inputs/SketchUpdateManyWithWhereWithoutProjectInput";
import { SketchUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/SketchUpdateWithWhereUniqueWithoutProjectInput";
import { SketchUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/SketchUpsertWithWhereUniqueWithoutProjectInput";
import { SketchWhereUniqueInput } from "../inputs/SketchWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [SketchCreateWithoutProjectInput], {
    nullable: true
  })
  create?: SketchCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: SketchCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: SketchUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => SketchCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: SketchCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SketchWhereUniqueInput], {
    nullable: true
  })
  connect?: SketchWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchWhereUniqueInput], {
    nullable: true
  })
  set?: SketchWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SketchWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchWhereUniqueInput], {
    nullable: true
  })
  delete?: SketchWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: SketchUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: SketchUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SketchScalarWhereInput[] | undefined;
}
