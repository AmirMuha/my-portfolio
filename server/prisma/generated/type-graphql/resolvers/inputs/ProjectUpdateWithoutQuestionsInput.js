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
exports.ProjectUpdateWithoutQuestionsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AdminUpdateOneRequiredWithoutProjectsInput_1 = require("../inputs/AdminUpdateOneRequiredWithoutProjectsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const SketchUpdateManyWithoutProjectInput_1 = require("../inputs/SketchUpdateManyWithoutProjectInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TechCategoryUpdateManyWithoutProjectInput_1 = require("../inputs/TechCategoryUpdateManyWithoutProjectInput");
let ProjectUpdateWithoutQuestionsInput = class ProjectUpdateWithoutQuestionsInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "github_url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "app_url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TechCategoryUpdateManyWithoutProjectInput_1.TechCategoryUpdateManyWithoutProjectInput, {
        nullable: true
    }),
    __metadata("design:type", TechCategoryUpdateManyWithoutProjectInput_1.TechCategoryUpdateManyWithoutProjectInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "tech_categories", void 0);
__decorate([
    TypeGraphQL.Field(_type => SketchUpdateManyWithoutProjectInput_1.SketchUpdateManyWithoutProjectInput, {
        nullable: true
    }),
    __metadata("design:type", SketchUpdateManyWithoutProjectInput_1.SketchUpdateManyWithoutProjectInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "sketches", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminUpdateOneRequiredWithoutProjectsInput_1.AdminUpdateOneRequiredWithoutProjectsInput, {
        nullable: true
    }),
    __metadata("design:type", AdminUpdateOneRequiredWithoutProjectsInput_1.AdminUpdateOneRequiredWithoutProjectsInput)
], ProjectUpdateWithoutQuestionsInput.prototype, "admin", void 0);
ProjectUpdateWithoutQuestionsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProjectUpdateWithoutQuestionsInput);
exports.ProjectUpdateWithoutQuestionsInput = ProjectUpdateWithoutQuestionsInput;
