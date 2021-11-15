import {
  Field,
  InputType
} from "type-graphql"

import { IsString } from "class-validator"

@InputType()
export class UpdateAdminPasswordInput {
  @Field(() => String)
  @IsString()
  oldPassword: string
}
