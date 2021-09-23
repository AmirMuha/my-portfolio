import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateNestedOneWithoutAnswerInput } from "../inputs/QuestionCreateNestedOneWithoutAnswerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnswerCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  answer!: string;

  @TypeGraphQL.Field(_type => QuestionCreateNestedOneWithoutAnswerInput, {
    nullable: true
  })
  question?: QuestionCreateNestedOneWithoutAnswerInput | undefined;
}
