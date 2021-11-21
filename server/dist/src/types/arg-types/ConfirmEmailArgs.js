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
exports.ConfirmTokenOrCodeArgsType = exports.ConfirmEmailArgsType = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let ConfirmEmailArgsType = class ConfirmEmailArgsType {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ConfirmEmailArgsType.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ConfirmEmailArgsType.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ConfirmEmailArgsType.prototype, "email", void 0);
ConfirmEmailArgsType = __decorate([
    (0, type_graphql_1.ArgsType)()
], ConfirmEmailArgsType);
exports.ConfirmEmailArgsType = ConfirmEmailArgsType;
let ConfirmTokenOrCodeArgsType = class ConfirmTokenOrCodeArgsType extends ConfirmEmailArgsType {
};
ConfirmTokenOrCodeArgsType = __decorate([
    (0, type_graphql_1.ArgsType)()
], ConfirmTokenOrCodeArgsType);
exports.ConfirmTokenOrCodeArgsType = ConfirmTokenOrCodeArgsType;
//# sourceMappingURL=ConfirmEmailArgs.js.map