import { IsBoolean, IsEmail, IsInt, IsString, MinLength } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";

export interface RPArgs {
  email: string;
  newPassword: string;
  token?: string;
  code?: number;
}

@ArgsType()
export class ResetPasswordArgs implements RPArgs {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  @MinLength(8)
  newPassword: string;

  @Field(() => String, { nullable: true })
  @IsString()
  token?: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  code?: number;


  @Field(() => Boolean)
  @IsBoolean()
  needCode: boolean
}
