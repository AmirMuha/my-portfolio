import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerUpdateInput } from "../../../inputs/AnswerUpdateInput";
import { AnswerWhereUniqueInput } from "../../../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAnswerArgs {
  @TypeGraphQL.Field(_type => AnswerUpdateInput, {
    nullable: false
  })
  data!: AnswerUpdateInput;

  @TypeGraphQL.Field(_type => AnswerWhereUniqueInput, {
    nullable: false
  })
  where!: AnswerWhereUniqueInput;
}
