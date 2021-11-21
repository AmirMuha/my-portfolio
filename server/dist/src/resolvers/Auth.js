"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UpdateAdminArgs_1 = require("../types/arg-types/UpdateAdminArgs");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const isLoggedIn_1 = require("../middlewares/isLoggedIn");
const redis_client_1 = require("../redis-client");
const ConfirmEmailArgs_1 = require("../types/arg-types/ConfirmEmailArgs");
const ForgotPasswordArgs_1 = require("../types/arg-types/ForgotPasswordArgs");
const LoginArgs_1 = require("../types/arg-types/LoginArgs");
const ResetPasswordArgs_1 = require("../types/arg-types/ResetPasswordArgs");
const randomNumber_1 = require("../utils/randomNumber");
const sendConfirmationEmail_1 = require("../utils/sendConfirmationEmail");
const sendEmail_1 = require("../utils/sendEmail");
let LoginReturnType = class LoginReturnType {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoginReturnType.prototype, "token", void 0);
LoginReturnType = __decorate([
    (0, type_graphql_1.ObjectType)()
], LoginReturnType);
let AuthResolver = class AuthResolver {
    async login({ prisma, req }, args) {
        const admin = await prisma.admin.findUnique({
            where: {
                email: args.data.email,
            },
        });
        if (!admin)
            throw new Error("Email or Password is incorrect.");
        if (!admin.confirmed) {
            await (0, sendConfirmationEmail_1.sendConfirmationEmail)(admin.id, admin.email);
            throw new Error("You haven't confirmed your email yet. An email sent to you to confirm your email.");
        }
        const isPassCorrect = await bcrypt_1.default.compare(args.data.password, admin.password);
        if (!isPassCorrect)
            throw new Error("Email or Password is incorrect.");
        const token = jsonwebtoken_1.default.sign({ id: admin.id }, process.env.JWT_PRIVATE_KEY, {
            expiresIn: `7d`,
        });
        req.session.token = token;
        return {
            token,
        };
    }
    async logout({ req }) {
        req.session.token = "";
        return true;
    }
    async confirmEmail({ prisma }, args) {
        if (!args.token && !args.code) {
            throw new Error("You need to provide either a token or code to confirm your email.");
        }
        const admin = await prisma.admin.findUnique({
            where: { email: args.email },
        });
        if (!admin)
            throw new Error("There is no admin with this email address.");
        if (args.token) {
            const verifiedToken = await jsonwebtoken_1.default.verify(args.token, process.env.JWT_PRIVATE_KEY);
            if (verifiedToken)
                throw new Error("Token is not valid or has expired.");
            await prisma.admin.update({
                data: {
                    confirmed: true,
                },
                where: { id: admin.id },
            });
        }
        else if (args.code) {
            const code = await redis_client_1.redis.get(`${process.env.EMAIL_CONFIRMATION_CODE}-${admin.id}`);
            if (!code)
                throw new Error("Email confirmation code has expired.");
            if (args.code !== parseInt(code))
                throw new Error("Email confirmation code is incorrect.");
            await prisma.admin.update({
                data: {
                    confirmed: true,
                },
                where: { id: admin.id },
            });
        }
        return true;
    }
    async forgotPassword({ data, prisma }, args) {
        const admin = await prisma.admin.findUnique({
            where: { email: args.email },
        });
        if (!admin)
            throw new Error("There is no admin with the given email.");
        const token = jsonwebtoken_1.default.sign({ id: data.userId }, process.env.JWT_PRIVATE_KEY, {
            expiresIn: 10 * 60,
        });
        const confirmation_code = (0, randomNumber_1.randomNumber)(1000, 9999);
        await redis_client_1.redis.set(`FORGOTPASSWORD_CODE-${data.id}`, confirmation_code, "ex", 60 * 10);
        const result = await (0, sendEmail_1.sendEmail)({
            type: sendEmail_1.EmailTypes.FORGOT_PASSWORD,
            from: process.env.MY_EMAIL,
            to: args.email,
            subject: "Forgot Password",
            token,
            confirmation_code,
        });
        if (!result)
            throw new Error("Couldn't send the email, Please try again later.");
        return true;
    }
    async verifyPassword({ prisma, data }, { data: { oldPassword } }) {
        const admin = await prisma.admin.findFirst({
            where: {
                id: { equals: data.userId },
            },
        });
        if (!admin) {
            throw new Error("Couldn't found admin with the given id, please make sure you're logged in.");
        }
        const isPasswordCorrect = await bcrypt_1.default.compare(oldPassword, admin.password);
        if (!isPasswordCorrect) {
            throw new Error("Old password is incorrect.");
        }
        return true;
    }
    async confirmTokenOrCode({ data }, args) {
        if (!args.code && !args.token)
            throw new Error("Please provide either a code or token to confirm deleting the admin.");
        if (args.token) {
            const token = args.token;
            const verifiedToken = (await jsonwebtoken_1.default.verify(token, process.env.JWT_PRIVATE_KEY, {
                complete: true,
            }));
            if (!verifiedToken)
                throw new Error("Token is either invalid or has expired.");
            return true;
        }
        else {
            const code = await redis_client_1.redis.get(`FORGOTPASSWORD_CODE-${data.userId}`);
            if (!code)
                throw new Error("Code is either incorrect or has expired.");
            if (parseInt(code) !== args.code)
                throw new Error("Code is incorrect.");
            return true;
        }
    }
    async resetPassword({ prisma, data, req }, args) {
        let flag = false;
        if (args.needCode) {
            if (!args.code && !args.token)
                throw new Error("Please provide either a code or token to confirm deleting the admin.");
            if (args.token) {
                const token = args.token;
                const verifiedToken = (await jsonwebtoken_1.default.verify(token, process.env.JWT_PRIVATE_KEY, {
                    complete: true,
                }));
                if (!verifiedToken)
                    throw new Error("Your code or token has expired. Please try again.");
                flag = true;
            }
            else {
                const code = await redis_client_1.redis.get(`FORGOTPASSWORD_CODE-${data.userId}`);
                if (!code)
                    throw new Error("Code is either incorrect or has expired.");
                if (parseInt(code) !== args.code)
                    throw new Error("Your code or token has expired. Please try again.");
                flag = true;
            }
            if (!flag)
                throw new Error("Your code or token has expired. Please try again.");
        }
        const hashedPassword = await bcrypt_1.default.hash(args.newPassword, 12);
        await prisma.admin.update({
            data: {
                password: hashedPassword,
            },
            where: {
                email: args.email,
            },
        });
        req.session.token = "";
        return "Password successfully changed !";
    }
    async isThereAnAdmin({ prisma }) {
        const foundadmin = await prisma.admin.findFirst({});
        return foundadmin ? true : false;
    }
    async me({ prisma }) {
        const admin = prisma.admin.findFirst({
            select: {
                email: true,
                github: true,
                instagram: true,
                whatsapp: true,
                linkedIn: true,
                skype: true,
                heroImage: true,
                resumes: true,
                lname: true,
                fname: true,
            },
        });
        return admin;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => LoginReturnType, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, LoginArgs_1.LoginArgsType]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ConfirmEmailArgs_1.ConfirmTokenOrCodeArgsType]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "confirmEmail", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ForgotPasswordArgs_1.ForgotPasswordArgs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "forgotPassword", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)(() => UpdateAdminArgs_1.UpdateAdminPasswordArgs)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateAdminArgs_1.UpdateAdminPasswordArgs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "verifyPassword", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ConfirmEmailArgs_1.ConfirmTokenOrCodeArgsType]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "confirmTokenOrCode", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ResetPasswordArgs_1.ResetPasswordArgs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "resetPassword", null);
__decorate([
    (0, type_graphql_1.Query)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "isThereAnAdmin", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_2.Admin, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "me", null);
AuthResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=Auth.js.map