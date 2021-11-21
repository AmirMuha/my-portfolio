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
exports.ProjectOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AdminOrderByWithRelationInput_1 = require("../inputs/AdminOrderByWithRelationInput");
const QuestionOrderByRelationAggregateInput_1 = require("../inputs/QuestionOrderByRelationAggregateInput");
const SketchOrderByRelationAggregateInput_1 = require("../inputs/SketchOrderByRelationAggregateInput");
const TechCategoryOrderByRelationAggregateInput_1 = require("../inputs/TechCategoryOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProjectOrderByWithRelationInput = class ProjectOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "github_url", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "app_url", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "summary", void 0);
__decorate([
    TypeGraphQL.Field(_type => TechCategoryOrderByRelationAggregateInput_1.TechCategoryOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "tech_categories", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionOrderByRelationAggregateInput_1.QuestionOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "questions", void 0);
__decorate([
    TypeGraphQL.Field(_type => SketchOrderByRelationAggregateInput_1.SketchOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "sketches", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminOrderByWithRelationInput_1.AdminOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "admin", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "admin_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "updatedAt", void 0);
ProjectOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProjectOrderByWithRelationInput);
exports.ProjectOrderByWithRelationInput = ProjectOrderByWithRelationInput;
//# sourceMappingURL=ProjectOrderByWithRelationInput.js.map