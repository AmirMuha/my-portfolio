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
exports.AdminCrudResolver = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const CountAdmins_1 = __importDefault(require("../middlewares/CountAdmins"));
const isLoggedIn_1 = require("../middlewares/isLoggedIn");
const getprivatekey_1 = require("../utils/getprivatekey");
const sendConfirmationEmail_1 = require("../utils/sendConfirmationEmail");
const sendEmail_1 = require("../utils/sendEmail");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const redis_client_1 = require("../redis-client");
const randomNumber_1 = require("../utils/randomNumber");
const ConfirmEmailArgs_1 = require("../types/arg-types/ConfirmEmailArgs");
let AdminCrudResolver = class AdminCrudResolver {
    async createAdmin({ prisma, data }, args) {
        if (data.numberOfAdmins === 0) {
            const apikey = await (0, getprivatekey_1.createApiKey)();
            const hashedPassword = await bcrypt_1.default.hash(args.data.password, 12);
            const newAdmin = await prisma.admin.create({
                data: Object.assign(Object.assign({}, args.data), { apikey, password: hashedPassword }),
            });
            await (0, sendConfirmationEmail_1.sendConfirmationEmail)(newAdmin.id, newAdmin.email);
            return newAdmin;
        }
        else {
            throw new Error("You are not allowed to perform this operation.");
        }
    }
    async updateAdmin({ prisma }, args) {
        if (args.data.password ||
            args.data.projects ||
            args.data.about ||
            args.data.stack ||
            args.data.messages) {
            throw new Error("Your are not allowed to udpate this property.");
        }
        const updatedAdmin = await prisma.admin.update({
            data: args.data,
            where: args.where,
        });
        return updatedAdmin;
    }
    async deleteAdmin(args) {
        if (!args.where.email)
            throw new Error("Please provide the email and id of the admin you want to delete.");
        const id = args.where.id;
        const token = await jsonwebtoken_1.default.sign({ id }, process.env.JWT_PRIVATE_KEY, {
            expiresIn: 10 * 60,
        });
        const confirmation_code = (0, randomNumber_1.randomNumber)(1000, 9999);
        await redis_client_1.redis.set(`DELETEADMIN_CODE-${id}`, confirmation_code, "ex", 10 * 60);
        await (0, sendEmail_1.sendEmail)({
            type: sendEmail_1.EmailTypes.CONFIRMATION,
            subject: "Deleting Admin",
            from: process.env.MY_EMAIL,
            to: args.where.email,
            token: token,
            confirmation_code,
        });
        return true;
    }
    async confirmAdminDelete({ prisma, data }, args) {
        if (!args.code && !args.token)
            throw new Error("Please provide either a code or token to confirm deleting the admin.");
        if (args.token) {
            const token = args.token;
            const verifiedToken = (await jsonwebtoken_1.default.verify(token, process.env.JWT_PRIVATE_KEY, {
                complete: true,
            }));
            if (!verifiedToken)
                throw new Error("Token is either invalid or has expired.");
            await prisma.admin.delete({
                where: {
                    id: verifiedToken.payload.id,
                    email: args.email,
                },
            });
        }
        else {
            const code = await redis_client_1.redis.get(`DELETEADMIN_CODE-${data.userId}`);
            if (!code)
                throw new Error("Code is either incorrect or has expired.");
            if (parseInt(code) !== args.code)
                throw new Error("Code is incorrect.");
            await prisma.admin.delete({
                where: {
                    email: args.email,
                },
            });
        }
        return true;
    }
    async getAdmin({ data }) {
        return data.admin;
    }
    async getNumOfAdmins({ data }) {
        return data.numberOfAdmins;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(CountAdmins_1.default),
    (0, type_graphql_1.Mutation)(() => type_graphql_2.Admin, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, type_graphql_2.CreateAdminArgs]),
    __metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "createAdmin", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => type_graphql_2.Admin, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, type_graphql_2.UpdateAdminArgs]),
    __metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "updateAdmin", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.DeleteAdminArgs]),
    __metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "deleteAdmin", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ConfirmEmailArgs_1.ConfirmTokenOrCodeArgsType]),
    __metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "confirmAdminDelete", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Query)(() => type_graphql_2.Admin),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "getAdmin", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(CountAdmins_1.default),
    (0, type_graphql_1.Query)(() => type_graphql_1.Int, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "getNumOfAdmins", null);
AdminCrudResolver = __decorate([
    (0, type_graphql_1.Resolver)(type_graphql_2.Admin)
], AdminCrudResolver);
exports.AdminCrudResolver = AdminCrudResolver;
//# sourceMappingURL=User.js.map