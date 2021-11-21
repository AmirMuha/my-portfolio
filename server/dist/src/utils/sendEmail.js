"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.EmailTypes = void 0;
const envs_and_consts_1 = require("../constants/envs-and-consts");
const markdown_it_1 = __importDefault(require("markdown-it"));
const nodemailer_1 = __importDefault(require("nodemailer"));
var EmailTypes;
(function (EmailTypes) {
    EmailTypes["CONFIRMATION"] = "CONFIRMATION";
    EmailTypes["FORGOT_PASSWORD"] = "FORGOT_PASSWORD";
    EmailTypes["NORMAL"] = "NORMAL";
})(EmailTypes = exports.EmailTypes || (exports.EmailTypes = {}));
const sendEmail = async ({ type, subject, to, token, confirmation_code, message, from = "test@test.com", }) => {
    try {
        if (!type)
            throw new Error("Type of the email must be set.");
        let testAccount = await nodemailer_1.default.createTestAccount();
        let htmlBody = ``;
        const transporter = nodemailer_1.default.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: envs_and_consts_1.__prod__ ? true : false,
            auth: {
                user: !envs_and_consts_1.__prod__ ? testAccount.user : process.env.EMAIL_USERNAME,
                pass: !envs_and_consts_1.__prod__ ? testAccount.pass : process.env.EMAIL_PASSWORD,
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
        if (type === EmailTypes.NORMAL) {
            htmlBody = (0, markdown_it_1.default)({
                html: true,
                breaks: true,
                linkify: true,
                typographer: true
            }).render(message);
        }
        const info = await transporter.sendMail({
            from,
            to,
            subject,
            html: htmlBody,
        });
        if (!envs_and_consts_1.__prod__) {
            console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
        }
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map