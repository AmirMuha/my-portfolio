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
exports.ResetPasswordArgs = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let ResetPasswordArgs = class ResetPasswordArgs {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ResetPasswordArgs.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], ResetPasswordArgs.prototype, "newPassword", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPasswordArgs.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ResetPasswordArgs.prototype, "code", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ResetPasswordArgs.prototype, "needCode", void 0);
ResetPasswordArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], ResetPasswordArgs);
exports.ResetPasswordArgs = ResetPasswordArgs;
//# sourceMappingURL=ResetPasswordArgs.js.map