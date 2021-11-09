import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackOrderByWithAggregationInput } from "../../../inputs/StackOrderByWithAggregationInput";
import { StackScalarWhereWithAggregatesInput } from "../../../inputs/StackScalarWhereWithAggregatesInput";
import { StackWhereInput } from "../../../inputs/StackWhereInput";
import { StackScalarFieldEnum } from "../../../../enums/StackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStackArgs {
  @TypeGraphQL.Field(_type => StackWhereInput, {
    nullable: true
  })
  where?: StackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StackOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StackOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "image" | "admin_id">;

  @TypeGraphQL.Field(_type => StackScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StackScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
