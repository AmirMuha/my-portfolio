import * as TypeGraphQL from "type-graphql";

export enum TechCategoryScalarFieldEnum {
  id = "id",
  name = "name",
  project_id = "project_id"
}
TypeGraphQL.registerEnumType(TechCategoryScalarFieldEnum, {
  name: "TechCategoryScalarFieldEnum",
  description: undefined,
});
