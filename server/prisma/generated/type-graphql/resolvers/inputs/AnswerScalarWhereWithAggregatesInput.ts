import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnswerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AnswerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AnswerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnswerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AnswerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnswerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AnswerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  answer?: StringWithAggregatesFilter | undefined;
}
