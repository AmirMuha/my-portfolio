import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutCountOrderByAggregateInput } from "../inputs/AboutCountOrderByAggregateInput";
import { AboutMaxOrderByAggregateInput } from "../inputs/AboutMaxOrderByAggregateInput";
import { AboutMinOrderByAggregateInput } from "../inputs/AboutMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutOrderByWithAggregationInput {
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
  body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  admin_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AboutCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AboutCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AboutMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AboutMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AboutMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AboutMinOrderByAggregateInput | undefined;
}
