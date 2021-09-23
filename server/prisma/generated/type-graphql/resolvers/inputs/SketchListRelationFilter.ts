import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchWhereInput } from "../inputs/SketchWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchListRelationFilter {
  @TypeGraphQL.Field(_type => SketchWhereInput, {
    nullable: true
  })
  every?: SketchWhereInput | undefined;

  @TypeGraphQL.Field(_type => SketchWhereInput, {
    nullable: true
  })
  some?: SketchWhereInput | undefined;

  @TypeGraphQL.Field(_type => SketchWhereInput, {
    nullable: true
  })
  none?: SketchWhereInput | undefined;
}
