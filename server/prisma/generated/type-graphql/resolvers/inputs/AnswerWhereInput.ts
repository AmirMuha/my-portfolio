import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionRelationFilter } from "../inputs/QuestionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnswerWhereInput {
  @TypeGraphQL.Field(_type => [AnswerWhereInput], {
    nullable: true
  })
  AND?: AnswerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnswerWhereInput], {
    nullable: true
  })
  OR?: AnswerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnswerWhereInput], {
    nullable: true
  })
  NOT?: AnswerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  answer?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => QuestionRelationFilter, {
    nullable: true
  })
  question?: QuestionRelationFilter | undefined;
}
