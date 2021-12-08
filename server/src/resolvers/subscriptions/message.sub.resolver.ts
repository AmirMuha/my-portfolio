import { Resolver, Root, Subscription } from "type-graphql";

@Resolver()
export class MessageSubResolver {
  @Subscription(() => Message,{
    topics: "NOTIFICATION",
  })
  async subscribeMessages(
    @Root() payload: {message: Message}
  ): Promise<Message> {
    return payload.message
  }
}
