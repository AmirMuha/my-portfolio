import { IsEmail, IsInt, IsString, Length, MinLength } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";

export interface RPArgs {
  email: string;
  newPassword: string;
  confirmPassword: string;
  token?: string;
  code?: number;
}

@ArgsType()
export class ResetPasswordArgs implements RPArgs {
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsString()
  @MinLength(8)
  @Field(() => String)
  newPassword: string;

  @IsString()
  @MinLength(8)
  @Field(() => String)
  confirmPassword: string;

  @IsString()
  @Field(() => String, { nullable: true })
  token?: string;

  @IsInt()
  @Field(() => Int, { nullable: true })
  code?: number;
}
