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
exports.QuestionUpdateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AnswerUpdateOneRequiredWithoutQuestionInput_1 = require("../inputs/AnswerUpdateOneRequiredWithoutQuestionInput");
const ProjectUpdateOneRequiredWithoutQuestionsInput_1 = require("../inputs/ProjectUpdateOneRequiredWithoutQuestionsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let QuestionUpdateInput = class QuestionUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], QuestionUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], QuestionUpdateInput.prototype, "question", void 0);
__decorate([
    TypeGraphQL.Field(_type => AnswerUpdateOneRequiredWithoutQuestionInput_1.AnswerUpdateOneRequiredWithoutQuestionInput, {
        nullable: true
    }),
    __metadata("design:type", AnswerUpdateOneRequiredWithoutQuestionInput_1.AnswerUpdateOneRequiredWithoutQuestionInput)
], QuestionUpdateInput.prototype, "answer", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutQuestionsInput_1.ProjectUpdateOneRequiredWithoutQuestionsInput, {
        nullable: true
    }),
    __metadata("design:type", ProjectUpdateOneRequiredWithoutQuestionsInput_1.ProjectUpdateOneRequiredWithoutQuestionsInput)
], QuestionUpdateInput.prototype, "project", void 0);
QuestionUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionUpdateInput);
exports.QuestionUpdateInput = QuestionUpdateInput;
