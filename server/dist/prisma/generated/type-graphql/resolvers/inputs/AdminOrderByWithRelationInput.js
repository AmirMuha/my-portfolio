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
exports.AdminOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AboutOrderByRelationAggregateInput_1 = require("../inputs/AboutOrderByRelationAggregateInput");
const MessageOrderByRelationAggregateInput_1 = require("../inputs/MessageOrderByRelationAggregateInput");
const ProjectOrderByRelationAggregateInput_1 = require("../inputs/ProjectOrderByRelationAggregateInput");
const StackOrderByRelationAggregateInput_1 = require("../inputs/StackOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AdminOrderByWithRelationInput = class AdminOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "fname", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "lname", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "linkedIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "whatsapp", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "instagram", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "github", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "skype", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "heroImage", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "resumes", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "confirmed", void 0);
__decorate([
    TypeGraphQL.Field(_type => AboutOrderByRelationAggregateInput_1.AboutOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "about", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput_1.MessageOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "messages", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProjectOrderByRelationAggregateInput_1.ProjectOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "projects", void 0);
__decorate([
    TypeGraphQL.Field(_type => StackOrderByRelationAggregateInput_1.StackOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "stack", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithRelationInput.prototype, "updatedAt", void 0);
AdminOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], AdminOrderByWithRelationInput);
exports.AdminOrderByWithRelationInput = AdminOrderByWithRelationInput;
//# sourceMappingURL=AdminOrderByWithRelationInput.js.map