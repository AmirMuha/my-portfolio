import * as TypeGraphQL from "type-graphql";

export enum MessageScalarFieldEnum {
  id = "id",
  subject = "subject",
  from = "from",
  files = "files",
  body = "body",
  read_status = "read_status",
  answer_status = "answer_status",
  admin_id = "admin_id",
  answeredAt = "answeredAt",
  createdAd = "createdAd"
}
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});
