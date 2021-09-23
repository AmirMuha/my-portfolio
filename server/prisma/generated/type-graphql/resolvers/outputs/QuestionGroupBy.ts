import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCountAggregate } from "../outputs/QuestionCountAggregate";
import { QuestionMaxAggregate } from "../outputs/QuestionMaxAggregate";
import { QuestionMinAggregate } from "../outputs/QuestionMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class QuestionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  answer_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_id!: string;

  @TypeGraphQL.Field(_type => QuestionCountAggregate, {
    nullable: true
  })
  _count!: QuestionCountAggregate | null;

  @TypeGraphQL.Field(_type => QuestionMinAggregate, {
    nullable: true
  })
  _min!: QuestionMinAggregate | null;

  @TypeGraphQL.Field(_type => QuestionMaxAggregate, {
    nullable: true
  })
  _max!: QuestionMaxAggregate | null;
}
