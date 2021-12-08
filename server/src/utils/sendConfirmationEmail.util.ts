import { EmailTypes, sendEmail } from "./sendEmail.util";

import jwt from "jsonwebtoken";
import { randomNumber } from "./randomNumber.util";
import { redis } from "../redis-client";

interface SendConfirmationEmailReturnType {
  token: string;
  code: number;
}

export const sendConfirmationEmail = async (
  id: string,
  to: string
): Promise<SendConfirmationEmailReturnType> => {
  const token = await jwt.sign({ email: id }, process.env.JWT_PRIVATE_KEY!, {
    expiresIn: 10 * 60,
  });
  const confirmation_code = randomNumber(1000, 9999);
  await redis.set(
    `${process.env.EMAIL_CONFIRMATION_CODE!}-${id}`,
    `${confirmation_code}`,
    "ex",
    10 * 60
  );
  const result = await sendEmail({
    type: EmailTypes.CONFIRMATION,
    from: process.env.MY_EMAIL!,
    to,
    subject: "Email Confirmation Code",
    confirmation_code: confirmation_code,
    token: token,
  });
  if (!result)
    throw new Error("Couldn't send the email, Please try again later.");
  return {
    token,
    code: confirmation_code,
  };
};
