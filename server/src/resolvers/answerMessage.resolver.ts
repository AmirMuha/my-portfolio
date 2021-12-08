import { Ctx, Mutation, Resolver, Args } from "type-graphql";
import { sendEmail, EmailTypes } from "../utils/sendEmail.util";
import { AnswerMessageArgs } from "../types/typegraphql/args/answerMessage.arg.type";
import { MyContext } from "../types/myContext.type";

@Resolver()
export class AnswerMessageResolver {
  @Mutation(() => Boolean)
  async answerMessage(
    @Ctx() { ORM }: MyContext,
    @Args() { data: { from, to, message, subject, messageId } }: AnswerMessageArgs
  ): Promise<boolean> {
    return sendEmail({
      type: EmailTypes.NORMAL,
      from,
      to,
      subject,
      message,
    })
      .then(async () => {
        return prisma.message
          .update({
            data: {
              answer_status: {
                set: true,
              },
              answeredAt: {
                set: new Date(),
              },
            },
            where: {
              id: messageId
            },
          })
          .then(() => true)
          .catch(() => false);
      })
      .catch((e) => {
        console.error(e);
        return false;
      });
  }
}
