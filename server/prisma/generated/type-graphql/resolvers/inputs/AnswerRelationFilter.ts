import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerWhereInput } from "../inputs/AnswerWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnswerRelationFilter {
  @TypeGraphQL.Field(_type => AnswerWhereInput, {
    nullable: true
  })
  is?: AnswerWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnswerWhereInput, {
    nullable: true
  })
  isNot?: AnswerWhereInput | undefined;
}
