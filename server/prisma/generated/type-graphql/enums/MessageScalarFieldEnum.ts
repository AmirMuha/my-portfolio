import * as TypeGraphQL from "type-graphql";

export enum MessageScalarFieldEnum {
  id = "id",
  subject = "subject",
  from = "from",
  body = "body",
  read_status = "read_status",
  answer_status = "answer_status",
  admin_id = "admin_id",
  createdAd = "createdAd"
}
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});
