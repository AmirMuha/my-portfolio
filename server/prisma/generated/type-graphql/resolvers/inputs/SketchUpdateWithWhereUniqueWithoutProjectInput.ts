import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchUpdateWithoutProjectInput } from "../inputs/SketchUpdateWithoutProjectInput";
import { SketchWhereUniqueInput } from "../inputs/SketchWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => SketchWhereUniqueInput, {
    nullable: false
  })
  where!: SketchWhereUniqueInput;

  @TypeGraphQL.Field(_type => SketchUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: SketchUpdateWithoutProjectInput;
}
