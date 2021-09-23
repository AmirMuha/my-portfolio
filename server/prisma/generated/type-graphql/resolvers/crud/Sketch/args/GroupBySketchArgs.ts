import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchOrderByWithAggregationInput } from "../../../inputs/SketchOrderByWithAggregationInput";
import { SketchScalarWhereWithAggregatesInput } from "../../../inputs/SketchScalarWhereWithAggregatesInput";
import { SketchWhereInput } from "../../../inputs/SketchWhereInput";
import { SketchScalarFieldEnum } from "../../../../enums/SketchScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySketchArgs {
  @TypeGraphQL.Field(_type => SketchWhereInput, {
    nullable: true
  })
  where?: SketchWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SketchOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SketchOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SketchScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "body" | "download_link" | "image" | "project_id">;

  @TypeGraphQL.Field(_type => SketchScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SketchScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
