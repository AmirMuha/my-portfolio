import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackCountAggregate } from "../outputs/StackCountAggregate";
import { StackMaxAggregate } from "../outputs/StackMaxAggregate";
import { StackMinAggregate } from "../outputs/StackMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class StackGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  admin_id!: string;

  @TypeGraphQL.Field(_type => StackCountAggregate, {
    nullable: true
  })
  _count!: StackCountAggregate | null;

  @TypeGraphQL.Field(_type => StackMinAggregate, {
    nullable: true
  })
  _min!: StackMinAggregate | null;

  @TypeGraphQL.Field(_type => StackMaxAggregate, {
    nullable: true
  })
  _max!: StackMaxAggregate | null;
}
