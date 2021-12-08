import * as TypeGraphQL from "type-graphql";

export enum SketchScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  summary = "summary",
  downloadables = "downloadables",
  image = "image",
  project_id = "project_id"
}
TypeGraphQL.registerEnumType(SketchScalarFieldEnum, {
  name: "SketchScalarFieldEnum",
  description: undefined,
});
