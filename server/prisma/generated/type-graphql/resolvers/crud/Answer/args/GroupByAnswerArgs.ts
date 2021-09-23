import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerOrderByWithAggregationInput } from "../../../inputs/AnswerOrderByWithAggregationInput";
import { AnswerScalarWhereWithAggregatesInput } from "../../../inputs/AnswerScalarWhereWithAggregatesInput";
import { AnswerWhereInput } from "../../../inputs/AnswerWhereInput";
import { AnswerScalarFieldEnum } from "../../../../enums/AnswerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAnswerArgs {
  @TypeGraphQL.Field(_type => AnswerWhereInput, {
    nullable: true
  })
  where?: AnswerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnswerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AnswerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnswerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "answer">;

  @TypeGraphQL.Field(_type => AnswerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AnswerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
