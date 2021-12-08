import {Field, InputType} from "type-graphql"
import { IsEmpty, IsString } from "class-validator"
@InputType()
export class AnswerMessageInput {
  @Field(() => String)
  @IsEmpty()
  @IsString()
  to: string
  @Field(() => String)
  @IsEmpty()
  @IsString()
  subject: string
  @Field(() => String)
  @IsEmpty()
  @IsString()
  from: string
  @Field(() => String)
  @IsEmpty()
  @IsString()
  message: string
  @Field(() => String)
  @IsEmpty()
  @IsString()
  messageId: string
}
