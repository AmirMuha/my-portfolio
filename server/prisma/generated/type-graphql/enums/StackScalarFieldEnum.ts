import * as TypeGraphQL from "type-graphql";

export enum StackScalarFieldEnum {
  id = "id",
  title = "title",
  image = "image",
  admin_id = "admin_id"
}
TypeGraphQL.registerEnumType(StackScalarFieldEnum, {
  name: "StackScalarFieldEnum",
  description: undefined,
});
