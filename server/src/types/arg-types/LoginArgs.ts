import { ArgsType, Field } from "type-graphql";
import { LoginInputType } from "../input-types/LoginInputTypes";

@ArgsType()
export class LoginArgsType {
  @Field(() => LoginInputType)
  data: LoginInputType;
}
