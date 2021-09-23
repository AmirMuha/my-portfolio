import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerCreateInput } from "../../../inputs/AnswerCreateInput";
import { AnswerUpdateInput } from "../../../inputs/AnswerUpdateInput";
import { AnswerWhereUniqueInput } from "../../../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAnswerArgs {
  @TypeGraphQL.Field(_type => AnswerWhereUniqueInput, {
    nullable: false
  })
  where!: AnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnswerCreateInput, {
    nullable: false
  })
  create!: AnswerCreateInput;

  @TypeGraphQL.Field(_type => AnswerUpdateInput, {
    nullable: false
  })
  update!: AnswerUpdateInput;
}
