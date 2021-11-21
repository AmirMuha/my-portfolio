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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerMessageInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let AnswerMessageInput = class AnswerMessageInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnswerMessageInput.prototype, "to", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnswerMessageInput.prototype, "subject", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnswerMessageInput.prototype, "from", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnswerMessageInput.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnswerMessageInput.prototype, "messageId", void 0);
AnswerMessageInput = __decorate([
    (0, type_graphql_1.InputType)()
], AnswerMessageInput);
exports.AnswerMessageInput = AnswerMessageInput;
//# sourceMappingURL=AnswerMessageInput.js.map