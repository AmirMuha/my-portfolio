import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCategoryOrderByWithAggregationInput } from "../../../inputs/TechCategoryOrderByWithAggregationInput";
import { TechCategoryScalarWhereWithAggregatesInput } from "../../../inputs/TechCategoryScalarWhereWithAggregatesInput";
import { TechCategoryWhereInput } from "../../../inputs/TechCategoryWhereInput";
import { TechCategoryScalarFieldEnum } from "../../../../enums/TechCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTechCategoryArgs {
  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  where?: TechCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TechCategoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "project_id">;

  @TypeGraphQL.Field(_type => TechCategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TechCategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
