"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendConfirmationEmail = void 0;
const sendEmail_1 = require("./sendEmail");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const randomNumber_1 = require("./randomNumber");
const redis_client_1 = require("../redis-client");
const sendConfirmationEmail = async (id, to) => {
    const token = await jsonwebtoken_1.default.sign({ email: id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: 10 * 60,
    });
    const confirmation_code = (0, randomNumber_1.randomNumber)(1000, 9999);
    await redis_client_1.redis.set(`${process.env.EMAIL_CONFIRMATION_CODE}-${id}`, `${confirmation_code}`, "ex", 10 * 60);
    const result = await (0, sendEmail_1.sendEmail)({
        type: sendEmail_1.EmailTypes.CONFIRMATION,
        from: process.env.MY_EMAIL,
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
exports.sendConfirmationEmail = sendConfirmationEmail;
//# sourceMappingURL=sendConfirmationEmail.js.map