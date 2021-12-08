import { IsString, IsEmail, MinLength } from "class-validator";
import { InputType, Field } from "type-graphql";

interface LoginInput {
  email: string;
  password: string;
}

@InputType()
export class LoginInputType implements LoginInput {
  @IsString()
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsString()
  @MinLength(8)
  @Field(() => String)
  password: string;
}
