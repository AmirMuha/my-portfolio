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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
let MessageResolver = class MessageResolver {
    async createNewMessage({ prisma }, publish, { data }, adminEmail) {
        const admin = prisma.admin.findFirst({
            where: { email: { equals: adminEmail } },
        });
        if (!adminEmail || !admin) {
            throw new Error("Admin not found, please make sure your entered the correct email for admin.");
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
            });
        }
        return message;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => type_graphql_2.Message, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.PubSub)("NOTIFICATION")),
    __param(2, (0, type_graphql_1.Args)()),
    __param(3, (0, type_graphql_1.Arg)("adminEmail", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Function, type_graphql_2.CreateMessageArgs, String]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "createNewMessage", null);
MessageResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MessageResolver);
exports.MessageResolver = MessageResolver;
//# sourceMappingURL=Message.js.map