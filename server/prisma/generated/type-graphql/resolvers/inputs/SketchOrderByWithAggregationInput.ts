import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchCountOrderByAggregateInput } from "../inputs/SketchCountOrderByAggregateInput";
import { SketchMaxOrderByAggregateInput } from "../inputs/SketchMaxOrderByAggregateInput";
import { SketchMinOrderByAggregateInput } from "../inputs/SketchMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchOrderByWithAggregationInput {
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
  download_link?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SketchCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SketchCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SketchMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SketchMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SketchMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SketchMinOrderByAggregateInput | undefined;
}
