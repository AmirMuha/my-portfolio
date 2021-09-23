import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchCreateManyProjectInputEnvelope } from "../inputs/SketchCreateManyProjectInputEnvelope";
import { SketchCreateOrConnectWithoutProjectInput } from "../inputs/SketchCreateOrConnectWithoutProjectInput";
import { SketchCreateWithoutProjectInput } from "../inputs/SketchCreateWithoutProjectInput";
import { SketchWhereUniqueInput } from "../inputs/SketchWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [SketchCreateWithoutProjectInput], {
    nullable: true
  })
  create?: SketchCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: SketchCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => SketchCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: SketchCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SketchWhereUniqueInput], {
    nullable: true
  })
  connect?: SketchWhereUniqueInput[] | undefined;
}
