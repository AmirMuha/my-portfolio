import jwt from "jsonwebtoken";
import {
  EMAIL_CONFIRMATION_CODE,
  EMAIL_CONFIRMATION_TOKEN,
  JWT_PRIVATE_KEY,
  MY_EMAIL,
} from "../constants/envs-and-consts";
import { redis } from "../redis-client";
import { randomNumber } from "./randomNumber";
import { EmailTypes, sendEmail } from "./sendEmail";

interface SendConfirmationEmailReturnType {
  token: string;
  result: string;
  code: number;
}

export const sendConfirmationEmail = async (
  id: string,
  to: string
): Promise<SendConfirmationEmailReturnType> => {
  const token = await jwt.sign({ email: id }, JWT_PRIVATE_KEY, {
    expiresIn: "10m",
  });
  const confirmation_code = randomNumber(1000, 9999);
  await redis.set(
    `${EMAIL_CONFIRMATION_CODE}-${id}`,
    `${confirmation_code}`,
    "ex",
    10 * 60
  );
  const result = await sendEmail({
    type: EmailTypes.CONFIRMATION,
    from: MY_EMAIL,
    to,
    subject: "Email Confirmation Code",
    confirmation_code: confirmation_code,
    token: token,
  });
  return {
    token,
    result,
    code: confirmation_code,
  };
};
