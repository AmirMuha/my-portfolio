import * as TypeGraphQL from "type-graphql";

export enum TechScalarFieldEnum {
  id = "id",
  name = "name",
  tech_category_id = "tech_category_id"
}
TypeGraphQL.registerEnumType(TechScalarFieldEnum, {
  name: "TechScalarFieldEnum",
  description: undefined,
});
