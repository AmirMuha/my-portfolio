import { ArgsType, Field } from "type-graphql"

import {AnswerMessageInput} from "../inputs/answerMessage.input.type"
@ArgsType()
export class AnswerMessageArgs {
  @Field(() => AnswerMessageInput)
  data: AnswerMessageInput
}
