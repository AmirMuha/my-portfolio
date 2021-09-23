import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionWhereInput } from "../inputs/QuestionWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionRelationFilter {
  @TypeGraphQL.Field(_type => QuestionWhereInput, {
    nullable: true
  })
  is?: QuestionWhereInput | undefined;

  @TypeGraphQL.Field(_type => QuestionWhereInput, {
    nullable: true
  })
  isNot?: QuestionWhereInput | undefined;
}
