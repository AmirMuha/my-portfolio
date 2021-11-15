import { ArgsType, Field } from "type-graphql";

import {
  UpdateAdminPasswordInput,
} from "../input-types/UpdateAdminInput";

@ArgsType()
export class UpdateAdminPasswordArgs {
  @Field(() => UpdateAdminPasswordInput)
  data: UpdateAdminPasswordInput;
}
