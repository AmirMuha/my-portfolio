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
exports.QuestionCreateNestedManyWithoutProjectInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const QuestionCreateManyProjectInputEnvelope_1 = require("../inputs/QuestionCreateManyProjectInputEnvelope");
const QuestionCreateOrConnectWithoutProjectInput_1 = require("../inputs/QuestionCreateOrConnectWithoutProjectInput");
const QuestionCreateWithoutProjectInput_1 = require("../inputs/QuestionCreateWithoutProjectInput");
const QuestionWhereUniqueInput_1 = require("../inputs/QuestionWhereUniqueInput");
let QuestionCreateNestedManyWithoutProjectInput = class QuestionCreateNestedManyWithoutProjectInput {
};
__decorate([
    TypeGraphQL.Field(_type => [QuestionCreateWithoutProjectInput_1.QuestionCreateWithoutProjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionCreateNestedManyWithoutProjectInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionCreateOrConnectWithoutProjectInput_1.QuestionCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionCreateNestedManyWithoutProjectInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionCreateManyProjectInputEnvelope_1.QuestionCreateManyProjectInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", QuestionCreateManyProjectInputEnvelope_1.QuestionCreateManyProjectInputEnvelope)
], QuestionCreateNestedManyWithoutProjectInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereUniqueInput_1.QuestionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionCreateNestedManyWithoutProjectInput.prototype, "connect", void 0);
QuestionCreateNestedManyWithoutProjectInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionCreateNestedManyWithoutProjectInput);
exports.QuestionCreateNestedManyWithoutProjectInput = QuestionCreateNestedManyWithoutProjectInput;
