import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerOrderByWithRelationInput } from "../../../inputs/AnswerOrderByWithRelationInput";
import { AnswerWhereInput } from "../../../inputs/AnswerWhereInput";
import { AnswerWhereUniqueInput } from "../../../inputs/AnswerWhereUniqueInput";
import { AnswerScalarFieldEnum } from "../../../../enums/AnswerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAnswerArgs {
  @TypeGraphQL.Field(_type => AnswerWhereInput, {
    nullable: true
  })
  where?: AnswerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnswerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AnswerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AnswerWhereUniqueInput, {
    nullable: true
  })
  cursor?: AnswerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AnswerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "answer"> | undefined;
}
