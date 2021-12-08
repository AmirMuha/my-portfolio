import {
  Arg,
  Ctx,
  Args,
  Resolver,
  Mutation,
  PubSub,
  Publisher,
} from "type-graphql";
import { PubSubEngine } from "graphql-subscriptions";
import { MyContext } from "../../types/myContext.type";

@Resolver()
export class MessageCRUDResolver {
  @Mutation(() => Message, { nullable: true })
  async createNewMessage(
    @Ctx() { prisma }: MyContext,
    @PubSub("NOTIFICATION")
    publish: Publisher<{ message: Message }>,
    @Args() { data }: CreateMessageArgs,
    @Arg("adminEmail", () => String) adminEmail: string
  ): Promise<Message | null | undefined> {
    const admin = prisma.admin.findFirst({
      where: { email: { equals: adminEmail } },
    });
    if (!adminEmail || !admin) {
      throw new Error(
        "Admin not found, please make sure your entered the correct email for admin."
      );
    }
    const message = await prisma.message.create({
      data: {
        from: data.from,
        body: data.body,
        files: data.files,
        subject: data.subject,
        answeredAt: null,
        admin: {
          connect: {
            email: adminEmail,
          },
        },
      },
    });
    if (message) {
      await publish({
        message: {
          id: message.id,
          from: message.from,
          body: message.body,
          files: message.files,
          subject: message.subject,
          answer_status: message.answer_status,
          read_status: message.read_status,
          createdAd: message.createdAd,
        },
      } as any);
    }
    return message as any
  }
}
