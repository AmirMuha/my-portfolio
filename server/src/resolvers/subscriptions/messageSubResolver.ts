import { Resolver, Subscription, Root } from "type-graphql";

import { Message } from "../../../prisma/generated/type-graphql";

@Resolver()
export class MessageSubResolver {
  @Subscription(() => Message,{
    topics: "NOTIFICATION",
  })
  async subscribeMessages(
    @Root() {message}: {message: Message}
  ): Promise<Message> {
    console.log(message)
    return message
  }
}
