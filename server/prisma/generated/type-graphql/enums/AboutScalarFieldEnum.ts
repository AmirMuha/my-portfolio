import * as TypeGraphQL from "type-graphql";

export enum AboutScalarFieldEnum {
  id = "id",
  title = "title",
  body = "body",
  admin_id = "admin_id",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AboutScalarFieldEnum, {
  name: "AboutScalarFieldEnum",
  description: undefined,
});
