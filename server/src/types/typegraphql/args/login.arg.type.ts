import { ArgsType, Field } from "type-graphql";
import { LoginInputType } from "../inputs/login.input.type";

@ArgsType()
export class LoginArgsType {
  @Field(() => LoginInputType)
  data: LoginInputType;
}
