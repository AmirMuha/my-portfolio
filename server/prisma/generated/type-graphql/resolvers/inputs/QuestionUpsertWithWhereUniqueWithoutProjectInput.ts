import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateWithoutProjectInput } from "../inputs/QuestionCreateWithoutProjectInput";
import { QuestionUpdateWithoutProjectInput } from "../inputs/QuestionUpdateWithoutProjectInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuestionUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: QuestionUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => QuestionCreateWithoutProjectInput, {
    nullable: false
  })
  create!: QuestionCreateWithoutProjectInput;
}
