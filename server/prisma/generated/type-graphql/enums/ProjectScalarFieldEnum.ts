import * as TypeGraphQL from "type-graphql";

export enum ProjectScalarFieldEnum {
  id = "id",
  name = "name",
  image = "image",
  type = "type",
  github_url = "github_url",
  app_url = "app_url",
  description = "description",
  admin_id = "admin_id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ProjectScalarFieldEnum, {
  name: "ProjectScalarFieldEnum",
  description: undefined,
});
