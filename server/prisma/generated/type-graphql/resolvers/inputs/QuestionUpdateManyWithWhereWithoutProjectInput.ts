import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionScalarWhereInput } from "../inputs/QuestionScalarWhereInput";
import { QuestionUpdateManyMutationInput } from "../inputs/QuestionUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionUpdateManyWithWhereWithoutProjectInput {
  @TypeGraphQL.Field(_type => QuestionScalarWhereInput, {
    nullable: false
  })
  where!: QuestionScalarWhereInput;

  @TypeGraphQL.Field(_type => QuestionUpdateManyMutationInput, {
    nullable: false
  })
  data!: QuestionUpdateManyMutationInput;
}
