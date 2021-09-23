import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCountAggregate } from "../outputs/TechCountAggregate";
import { TechMaxAggregate } from "../outputs/TechMaxAggregate";
import { TechMinAggregate } from "../outputs/TechMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TechGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tech_category_id!: string;

  @TypeGraphQL.Field(_type => TechCountAggregate, {
    nullable: true
  })
  _count!: TechCountAggregate | null;

  @TypeGraphQL.Field(_type => TechMinAggregate, {
    nullable: true
  })
  _min!: TechMinAggregate | null;

  @TypeGraphQL.Field(_type => TechMaxAggregate, {
    nullable: true
  })
  _max!: TechMaxAggregate | null;
}
