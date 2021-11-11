import { ArgsType, Field } from "type-graphql"

import {AnswerMessageInput} from "../input-types/AnswerMessageInput"
@ArgsType()
export class AnswerMessageArgs {
  @Field(() => AnswerMessageInput)
  data: AnswerMessageInput
}
