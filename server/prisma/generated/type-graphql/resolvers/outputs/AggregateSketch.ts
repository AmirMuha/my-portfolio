import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchCountAggregate } from "../outputs/SketchCountAggregate";
import { SketchMaxAggregate } from "../outputs/SketchMaxAggregate";
import { SketchMinAggregate } from "../outputs/SketchMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateSketch {
  @TypeGraphQL.Field(_type => SketchCountAggregate, {
    nullable: true
  })
  _count!: SketchCountAggregate | null;

  @TypeGraphQL.Field(_type => SketchMinAggregate, {
    nullable: true
  })
  _min!: SketchMinAggregate | null;

  @TypeGraphQL.Field(_type => SketchMaxAggregate, {
    nullable: true
  })
  _max!: SketchMaxAggregate | null;
}
