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
exports.TechCreateNestedManyWithoutTech_categoriesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TechCreateManyTech_categoriesInputEnvelope_1 = require("../inputs/TechCreateManyTech_categoriesInputEnvelope");
const TechCreateOrConnectWithoutTech_categoriesInput_1 = require("../inputs/TechCreateOrConnectWithoutTech_categoriesInput");
const TechCreateWithoutTech_categoriesInput_1 = require("../inputs/TechCreateWithoutTech_categoriesInput");
const TechWhereUniqueInput_1 = require("../inputs/TechWhereUniqueInput");
let TechCreateNestedManyWithoutTech_categoriesInput = class TechCreateNestedManyWithoutTech_categoriesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [TechCreateWithoutTech_categoriesInput_1.TechCreateWithoutTech_categoriesInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCreateNestedManyWithoutTech_categoriesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechCreateOrConnectWithoutTech_categoriesInput_1.TechCreateOrConnectWithoutTech_categoriesInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCreateNestedManyWithoutTech_categoriesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => TechCreateManyTech_categoriesInputEnvelope_1.TechCreateManyTech_categoriesInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCreateNestedManyWithoutTech_categoriesInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechWhereUniqueInput_1.TechWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCreateNestedManyWithoutTech_categoriesInput.prototype, "connect", void 0);
TechCreateNestedManyWithoutTech_categoriesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], TechCreateNestedManyWithoutTech_categoriesInput);
exports.TechCreateNestedManyWithoutTech_categoriesInput = TechCreateNestedManyWithoutTech_categoriesInput;
//# sourceMappingURL=TechCreateNestedManyWithoutTech_categoriesInput.js.map