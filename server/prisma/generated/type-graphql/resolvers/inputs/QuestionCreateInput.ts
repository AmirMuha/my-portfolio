import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutQuestionsInput } from "../inputs/ProjectCreateNestedOneWithoutQuestionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  answer!: string;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutQuestionsInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutQuestionsInput;
}
