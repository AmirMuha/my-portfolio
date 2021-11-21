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
var ProjectWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AdminRelationFilter_1 = require("../inputs/AdminRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const QuestionListRelationFilter_1 = require("../inputs/QuestionListRelationFilter");
const SketchListRelationFilter_1 = require("../inputs/SketchListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TechCategoryListRelationFilter_1 = require("../inputs/TechCategoryListRelationFilter");
let ProjectWhereInput = ProjectWhereInput_1 = class ProjectWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "github_url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "app_url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "summary", void 0);
__decorate([
    TypeGraphQL.Field(_type => TechCategoryListRelationFilter_1.TechCategoryListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "tech_categories", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionListRelationFilter_1.QuestionListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "questions", void 0);
__decorate([
    TypeGraphQL.Field(_type => SketchListRelationFilter_1.SketchListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "sketches", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminRelationFilter_1.AdminRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "admin", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "admin_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectWhereInput.prototype, "updatedAt", void 0);
ProjectWhereInput = ProjectWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProjectWhereInput);
exports.ProjectWhereInput = ProjectWhereInput;
//# sourceMappingURL=ProjectWhereInput.js.map