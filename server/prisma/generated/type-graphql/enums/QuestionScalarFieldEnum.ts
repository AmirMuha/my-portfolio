import * as TypeGraphQL from "type-graphql";

export enum QuestionScalarFieldEnum {
  id = "id",
  question = "question",
  answer = "answer",
  project_id = "project_id"
}
TypeGraphQL.registerEnumType(QuestionScalarFieldEnum, {
  name: "QuestionScalarFieldEnum",
  description: undefined,
});
