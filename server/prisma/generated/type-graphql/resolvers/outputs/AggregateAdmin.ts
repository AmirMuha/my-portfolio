import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCountAggregate } from "../outputs/AdminCountAggregate";
import { AdminMaxAggregate } from "../outputs/AdminMaxAggregate";
import { AdminMinAggregate } from "../outputs/AdminMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateAdmin {
  @TypeGraphQL.Field(_type => AdminCountAggregate, {
    nullable: true
  })
  _count!: AdminCountAggregate | null;

  @TypeGraphQL.Field(_type => AdminMinAggregate, {
    nullable: true
  })
  _min!: AdminMinAggregate | null;

  @TypeGraphQL.Field(_type => AdminMaxAggregate, {
    nullable: true
  })
  _max!: AdminMaxAggregate | null;
}
