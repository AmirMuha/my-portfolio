import nodemailer from "nodemailer";
import {
  EMAIL_HOST,
  EMAIL_PASSWORD,
  EMAIL_PORT,
  EMAIL_USERNAME,
  __prod__,
} from "../constants/envs-and-consts";

export enum EmailTypes {
  CONFIRMATION = "CONFIRMATION",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
}
interface EmailOptions {
  type: EmailTypes;
  subject: string;
  from: string;
  to: string;
  token: string;
  confirmation_code?: number;
}

export const sendEmail = async ({
  type,
  subject,
  to,
  token,
  confirmation_code,
  from = "test@test.com",
}: EmailOptions): Promise<string | any> => {
  try {
    if (!type) throw new Error("Type of the email must be set.");
    let testAccount = await nodemailer.createTestAccount();
    let htmlBody = ``;
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: __prod__ ? true : false, // true for 465, false for other ports
      auth: {
        user: !__prod__ ? testAccount.user : EMAIL_USERNAME, // generated ethereal user
        pass: !__prod__ ? testAccount.pass : EMAIL_PASSWORD, // generated ethereal password
      },
    });
    if (type === EmailTypes.CONFIRMATION && confirmation_code) {
      htmlBody = `
        <p>
          <b>Confirmation token: </b><span>${token}</span>
          <b>Confirmation Code: </b><span>${confirmation_code}</span>
        </p>
      `;
    }
    if (type === EmailTypes.FORGOT_PASSWORD) {
      htmlBody = `
        <p>
          <b>Forgot Password Code: </b><span>${confirmation_code}</span>
          <b>Forgot Password Token: </b><span>${token}</span>
        </p>
      `;
    }
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html: htmlBody,
    });
    if (!__prod__) {
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
