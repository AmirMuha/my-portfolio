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
var AdminWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AboutListRelationFilter_1 = require("../inputs/AboutListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const MessageListRelationFilter_1 = require("../inputs/MessageListRelationFilter");
const ProjectListRelationFilter_1 = require("../inputs/ProjectListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let AdminWhereInput = AdminWhereInput_1 = class AdminWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [AdminWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AdminWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AdminWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AdminWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AdminWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AdminWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "fname", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "lname", void 0);
__decorate([
    TypeGraphQL.Field(_type => AboutListRelationFilter_1.AboutListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", AboutListRelationFilter_1.AboutListRelationFilter)
], AdminWhereInput.prototype, "about", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageListRelationFilter_1.MessageListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", MessageListRelationFilter_1.MessageListRelationFilter)
], AdminWhereInput.prototype, "messages", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProjectListRelationFilter_1.ProjectListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ProjectListRelationFilter_1.ProjectListRelationFilter)
], AdminWhereInput.prototype, "projects", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AdminWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AdminWhereInput.prototype, "updatedAt", void 0);
AdminWhereInput = AdminWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], AdminWhereInput);
exports.AdminWhereInput = AdminWhereInput;
