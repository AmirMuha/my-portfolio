import { IsEmail, IsInt, IsString } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class ConfirmEmailArgsType {
  @IsString()
  @Field(() => String, { nullable: true })
  token?: string;

  @IsInt()
  @Field(() => Int, { nullable: true })
  code?: number;

  @IsString()
  @IsEmail()
  @Field(() => String, { nullable: true })
  email: string;
}
