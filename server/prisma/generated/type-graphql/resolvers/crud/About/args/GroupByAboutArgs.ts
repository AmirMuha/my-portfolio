import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutOrderByWithAggregationInput } from "../../../inputs/AboutOrderByWithAggregationInput";
import { AboutScalarWhereWithAggregatesInput } from "../../../inputs/AboutScalarWhereWithAggregatesInput";
import { AboutWhereInput } from "../../../inputs/AboutWhereInput";
import { AboutScalarFieldEnum } from "../../../../enums/AboutScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAboutArgs {
  @TypeGraphQL.Field(_type => AboutWhereInput, {
    nullable: true
  })
  where?: AboutWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AboutOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AboutOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "body" | "admin_id" | "updatedAt">;

  @TypeGraphQL.Field(_type => AboutScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AboutScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
