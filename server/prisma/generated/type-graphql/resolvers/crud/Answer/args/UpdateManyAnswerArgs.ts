import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerUpdateManyMutationInput } from "../../../inputs/AnswerUpdateManyMutationInput";
import { AnswerWhereInput } from "../../../inputs/AnswerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAnswerArgs {
  @TypeGraphQL.Field(_type => AnswerUpdateManyMutationInput, {
    nullable: false
  })
  data!: AnswerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AnswerWhereInput, {
    nullable: true
  })
  where?: AnswerWhereInput | undefined;
}
