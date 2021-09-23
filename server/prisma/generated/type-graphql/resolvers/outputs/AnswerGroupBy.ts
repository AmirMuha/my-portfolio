import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCountAggregate } from "../outputs/AnswerCountAggregate";
import { AnswerMaxAggregate } from "../outputs/AnswerMaxAggregate";
import { AnswerMinAggregate } from "../outputs/AnswerMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AnswerGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  answer!: string;

  @TypeGraphQL.Field(_type => AnswerCountAggregate, {
    nullable: true
  })
  _count!: AnswerCountAggregate | null;

  @TypeGraphQL.Field(_type => AnswerMinAggregate, {
    nullable: true
  })
  _min!: AnswerMinAggregate | null;

  @TypeGraphQL.Field(_type => AnswerMaxAggregate, {
    nullable: true
  })
  _max!: AnswerMaxAggregate | null;
}
