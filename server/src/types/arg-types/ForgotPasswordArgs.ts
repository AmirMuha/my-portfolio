import { ArgsType, Field } from "type-graphql";

export interface FPArgs {
  email: string;
}

@ArgsType()
export class ForgotPasswordArgs implements FPArgs {
  @Field(() => String)
  email: string;
}
