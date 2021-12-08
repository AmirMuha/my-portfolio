import { ArgsType, Field } from "type-graphql";

import {
  UpdateAdminPasswordInput,
} from "../inputs/updateAdmin.input.type";

@ArgsType()
export class UpdateAdminPasswordArgs {
  @Field(() => UpdateAdminPasswordInput)
  data: UpdateAdminPasswordInput;
}
