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
  skype = "skype",
  heroImage = "heroImage",
  resumes = "resumes",
  confirmed = "confirmed",
  apikey = "apikey",
  password = "password",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AdminScalarFieldEnum, {
  name: "AdminScalarFieldEnum",
  description: undefined,
});
