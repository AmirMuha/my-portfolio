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
exports.TechUpdateManyWithoutTech_categoriesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TechCreateManyTech_categoriesInputEnvelope_1 = require("../inputs/TechCreateManyTech_categoriesInputEnvelope");
const TechCreateOrConnectWithoutTech_categoriesInput_1 = require("../inputs/TechCreateOrConnectWithoutTech_categoriesInput");
const TechCreateWithoutTech_categoriesInput_1 = require("../inputs/TechCreateWithoutTech_categoriesInput");
const TechScalarWhereInput_1 = require("../inputs/TechScalarWhereInput");
const TechUpdateManyWithWhereWithoutTech_categoriesInput_1 = require("../inputs/TechUpdateManyWithWhereWithoutTech_categoriesInput");
const TechUpdateWithWhereUniqueWithoutTech_categoriesInput_1 = require("../inputs/TechUpdateWithWhereUniqueWithoutTech_categoriesInput");
const TechUpsertWithWhereUniqueWithoutTech_categoriesInput_1 = require("../inputs/TechUpsertWithWhereUniqueWithoutTech_categoriesInput");
const TechWhereUniqueInput_1 = require("../inputs/TechWhereUniqueInput");
let TechUpdateManyWithoutTech_categoriesInput = class TechUpdateManyWithoutTech_categoriesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [TechCreateWithoutTech_categoriesInput_1.TechCreateWithoutTech_categoriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechCreateOrConnectWithoutTech_categoriesInput_1.TechCreateOrConnectWithoutTech_categoriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechUpsertWithWhereUniqueWithoutTech_categoriesInput_1.TechUpsertWithWhereUniqueWithoutTech_categoriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => TechCreateManyTech_categoriesInputEnvelope_1.TechCreateManyTech_categoriesInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", TechCreateManyTech_categoriesInputEnvelope_1.TechCreateManyTech_categoriesInputEnvelope)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechWhereUniqueInput_1.TechWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechWhereUniqueInput_1.TechWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechWhereUniqueInput_1.TechWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechWhereUniqueInput_1.TechWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechUpdateWithWhereUniqueWithoutTech_categoriesInput_1.TechUpdateWithWhereUniqueWithoutTech_categoriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechUpdateManyWithWhereWithoutTech_categoriesInput_1.TechUpdateManyWithWhereWithoutTech_categoriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechScalarWhereInput_1.TechScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TechUpdateManyWithoutTech_categoriesInput.prototype, "deleteMany", void 0);
TechUpdateManyWithoutTech_categoriesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], TechUpdateManyWithoutTech_categoriesInput);
exports.TechUpdateManyWithoutTech_categoriesInput = TechUpdateManyWithoutTech_categoriesInput;
