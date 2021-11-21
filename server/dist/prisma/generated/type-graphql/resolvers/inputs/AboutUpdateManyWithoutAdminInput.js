"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUpdateManyWithoutAdminInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AboutCreateManyAdminInputEnvelope_1 = require("../inputs/AboutCreateManyAdminInputEnvelope");
const AboutCreateOrConnectWithoutAdminInput_1 = require("../inputs/AboutCreateOrConnectWithoutAdminInput");
const AboutCreateWithoutAdminInput_1 = require("../inputs/AboutCreateWithoutAdminInput");
const AboutScalarWhereInput_1 = require("../inputs/AboutScalarWhereInput");
const AboutUpdateManyWithWhereWithoutAdminInput_1 = require("../inputs/AboutUpdateManyWithWhereWithoutAdminInput");
const AboutUpdateWithWhereUniqueWithoutAdminInput_1 = require("../inputs/AboutUpdateWithWhereUniqueWithoutAdminInput");
const AboutUpsertWithWhereUniqueWithoutAdminInput_1 = require("../inputs/AboutUpsertWithWhereUniqueWithoutAdminInput");
const AboutWhereUniqueInput_1 = require("../inputs/AboutWhereUniqueInput");
let AboutUpdateManyWithoutAdminInput = class AboutUpdateManyWithoutAdminInput {
};
__decorate([
    TypeGraphQL.Field(_type => [AboutCreateWithoutAdminInput_1.AboutCreateWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutCreateOrConnectWithoutAdminInput_1.AboutCreateOrConnectWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutUpsertWithWhereUniqueWithoutAdminInput_1.AboutUpsertWithWhereUniqueWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => AboutCreateManyAdminInputEnvelope_1.AboutCreateManyAdminInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutWhereUniqueInput_1.AboutWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutWhereUniqueInput_1.AboutWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutWhereUniqueInput_1.AboutWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutWhereUniqueInput_1.AboutWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutUpdateWithWhereUniqueWithoutAdminInput_1.AboutUpdateWithWhereUniqueWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutUpdateManyWithWhereWithoutAdminInput_1.AboutUpdateManyWithWhereWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AboutScalarWhereInput_1.AboutScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AboutUpdateManyWithoutAdminInput.prototype, "deleteMany", void 0);
AboutUpdateManyWithoutAdminInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], AboutUpdateManyWithoutAdminInput);
exports.AboutUpdateManyWithoutAdminInput = AboutUpdateManyWithoutAdminInput;
//# sourceMappingURL=AboutUpdateManyWithoutAdminInput.js.map