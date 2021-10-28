import * as TypeGraphQL from "type-graphql";

export enum AdminScalarFieldEnum {
  id = "id",
  email = "email",
  fname = "fname",
  lname = "lname",
  linkedIn = "linkedIn",
  whatsapp = "whatsapp",
  instagram = "instagram",
  github = "github",
  heroImage = "heroImage",
  stack = "stack",
  resumes = "resumes",
  confirmed = "confirmed",
  isPublished = "isPublished",
  stacks = "stacks",
  apikey = "apikey",
  password = "password",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AdminScalarFieldEnum, {
  name: "AdminScalarFieldEnum",
  description: undefined,
});
