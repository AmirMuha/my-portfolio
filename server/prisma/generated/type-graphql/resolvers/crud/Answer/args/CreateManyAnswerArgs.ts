import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerCreateManyInput } from "../../../inputs/AnswerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAnswerArgs {
  @TypeGraphQL.Field(_type => [AnswerCreateManyInput], {
    nullable: false
  })
  data!: AnswerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
