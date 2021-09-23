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
exports.GroupBySketchArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SketchOrderByWithAggregationInput_1 = require("../../../inputs/SketchOrderByWithAggregationInput");
const SketchScalarWhereWithAggregatesInput_1 = require("../../../inputs/SketchScalarWhereWithAggregatesInput");
const SketchWhereInput_1 = require("../../../inputs/SketchWhereInput");
const SketchScalarFieldEnum_1 = require("../../../../enums/SketchScalarFieldEnum");
let GroupBySketchArgs = class GroupBySketchArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SketchWhereInput_1.SketchWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SketchWhereInput_1.SketchWhereInput)
], GroupBySketchArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchOrderByWithAggregationInput_1.SketchOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupBySketchArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchScalarFieldEnum_1.SketchScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupBySketchArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => SketchScalarWhereWithAggregatesInput_1.SketchScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", SketchScalarWhereWithAggregatesInput_1.SketchScalarWhereWithAggregatesInput)
], GroupBySketchArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySketchArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySketchArgs.prototype, "skip", void 0);
GroupBySketchArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupBySketchArgs);
exports.GroupBySketchArgs = GroupBySketchArgs;
