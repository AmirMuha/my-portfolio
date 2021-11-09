import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackCountOrderByAggregateInput } from "../inputs/StackCountOrderByAggregateInput";
import { StackMaxOrderByAggregateInput } from "../inputs/StackMaxOrderByAggregateInput";
import { StackMinOrderByAggregateInput } from "../inputs/StackMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  admin_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StackCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StackCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StackMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StackMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StackMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StackMinOrderByAggregateInput | undefined;
}
