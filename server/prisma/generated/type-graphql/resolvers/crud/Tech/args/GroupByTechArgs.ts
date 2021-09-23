import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechOrderByWithAggregationInput } from "../../../inputs/TechOrderByWithAggregationInput";
import { TechScalarWhereWithAggregatesInput } from "../../../inputs/TechScalarWhereWithAggregatesInput";
import { TechWhereInput } from "../../../inputs/TechWhereInput";
import { TechScalarFieldEnum } from "../../../../enums/TechScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTechArgs {
  @TypeGraphQL.Field(_type => TechWhereInput, {
    nullable: true
  })
  where?: TechWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TechOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TechOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "tech_category_id">;

  @TypeGraphQL.Field(_type => TechScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TechScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
