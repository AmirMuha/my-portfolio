import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCountOrderByAggregateInput } from "../inputs/TechCountOrderByAggregateInput";
import { TechMaxOrderByAggregateInput } from "../inputs/TechMaxOrderByAggregateInput";
import { TechMinOrderByAggregateInput } from "../inputs/TechMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tech_category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TechCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TechCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TechMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TechMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TechMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TechMinOrderByAggregateInput | undefined;
}
