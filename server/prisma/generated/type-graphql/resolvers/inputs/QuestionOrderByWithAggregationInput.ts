import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCountOrderByAggregateInput } from "../inputs/QuestionCountOrderByAggregateInput";
import { QuestionMaxOrderByAggregateInput } from "../inputs/QuestionMaxOrderByAggregateInput";
import { QuestionMinOrderByAggregateInput } from "../inputs/QuestionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  question?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  answer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => QuestionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: QuestionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => QuestionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: QuestionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => QuestionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: QuestionMinOrderByAggregateInput | undefined;
}
