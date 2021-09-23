import * as TypeGraphQL from "type-graphql";

export enum AdminScalarFieldEnum {
  id = "id",
  email = "email",
  fname = "fname",
  lname = "lname",
  apikey = "apikey",
  password = "password",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AdminScalarFieldEnum, {
  name: "AdminScalarFieldEnum",
  description: undefined,
});
