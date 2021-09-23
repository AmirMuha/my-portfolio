import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [QuestionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  question?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  answer_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  project_id?: StringWithAggregatesFilter | undefined;
}
