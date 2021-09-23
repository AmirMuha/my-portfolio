import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionWhereInput } from "../inputs/QuestionWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionListRelationFilter {
  @TypeGraphQL.Field(_type => QuestionWhereInput, {
    nullable: true
  })
  every?: QuestionWhereInput | undefined;

  @TypeGraphQL.Field(_type => QuestionWhereInput, {
    nullable: true
  })
  some?: QuestionWhereInput | undefined;

  @TypeGraphQL.Field(_type => QuestionWhereInput, {
    nullable: true
  })
  none?: QuestionWhereInput | undefined;
}
