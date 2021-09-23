import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCountOrderByAggregateInput } from "../inputs/TechCategoryCountOrderByAggregateInput";
import { TechCategoryMaxOrderByAggregateInput } from "../inputs/TechCategoryMaxOrderByAggregateInput";
import { TechCategoryMinOrderByAggregateInput } from "../inputs/TechCategoryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryOrderByWithAggregationInput {
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
  project_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TechCategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TechCategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TechCategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TechCategoryMinOrderByAggregateInput | undefined;
}
