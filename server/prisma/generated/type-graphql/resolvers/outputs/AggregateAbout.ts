import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutCountAggregate } from "../outputs/AboutCountAggregate";
import { AboutMaxAggregate } from "../outputs/AboutMaxAggregate";
import { AboutMinAggregate } from "../outputs/AboutMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateAbout {
  @TypeGraphQL.Field(_type => AboutCountAggregate, {
    nullable: true
  })
  _count!: AboutCountAggregate | null;

  @TypeGraphQL.Field(_type => AboutMinAggregate, {
    nullable: true
  })
  _min!: AboutMinAggregate | null;

  @TypeGraphQL.Field(_type => AboutMaxAggregate, {
    nullable: true
  })
  _max!: AboutMaxAggregate | null;
}
