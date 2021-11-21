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
exports.AnswerMessageResolver = void 0;
const type_graphql_1 = require("type-graphql");
const sendEmail_1 = require("../utils/sendEmail");
const AnswerMessageArgs_1 = require("../types/arg-types/AnswerMessageArgs");
let AnswerMessageResolver = class AnswerMessageResolver {
    async answerMessage({ prisma }, { data: { from, to, message, subject, messageId } }) {
        return (0, sendEmail_1.sendEmail)({
            type: sendEmail_1.EmailTypes.NORMAL,
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
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AnswerMessageArgs_1.AnswerMessageArgs]),
    __metadata("design:returntype", Promise)
], AnswerMessageResolver.prototype, "answerMessage", null);
AnswerMessageResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AnswerMessageResolver);
exports.AnswerMessageResolver = AnswerMessageResolver;
//# sourceMappingURL=AnswerMessage.js.map