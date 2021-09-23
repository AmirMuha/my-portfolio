import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchCreateWithoutProjectInput } from "../inputs/SketchCreateWithoutProjectInput";
import { SketchUpdateWithoutProjectInput } from "../inputs/SketchUpdateWithoutProjectInput";
import { SketchWhereUniqueInput } from "../inputs/SketchWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => SketchWhereUniqueInput, {
    nullable: false
  })
  where!: SketchWhereUniqueInput;

  @TypeGraphQL.Field(_type => SketchUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: SketchUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => SketchCreateWithoutProjectInput, {
    nullable: false
  })
  create!: SketchCreateWithoutProjectInput;
}
