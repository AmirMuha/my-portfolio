import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerWhereUniqueInput } from "../../../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAnswerArgs {
  @TypeGraphQL.Field(_type => AnswerWhereUniqueInput, {
    nullable: false
  })
  where!: AnswerWhereUniqueInput;
}
