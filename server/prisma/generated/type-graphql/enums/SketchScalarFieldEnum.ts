import * as TypeGraphQL from "type-graphql";

export enum SketchScalarFieldEnum {
  id = "id",
  title = "title",
  body = "body",
  download_link = "download_link",
  image = "image",
  project_id = "project_id"
}
TypeGraphQL.registerEnumType(SketchScalarFieldEnum, {
  name: "SketchScalarFieldEnum",
  description: undefined,
});
