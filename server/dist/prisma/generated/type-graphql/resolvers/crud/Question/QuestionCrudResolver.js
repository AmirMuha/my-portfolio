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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateQuestionArgs_1 = require("./args/AggregateQuestionArgs");
const CreateManyQuestionArgs_1 = require("./args/CreateManyQuestionArgs");
const CreateQuestionArgs_1 = require("./args/CreateQuestionArgs");
const DeleteManyQuestionArgs_1 = require("./args/DeleteManyQuestionArgs");
const DeleteQuestionArgs_1 = require("./args/DeleteQuestionArgs");
const FindFirstQuestionArgs_1 = require("./args/FindFirstQuestionArgs");
const FindManyQuestionArgs_1 = require("./args/FindManyQuestionArgs");
const FindUniqueQuestionArgs_1 = require("./args/FindUniqueQuestionArgs");
const GroupByQuestionArgs_1 = require("./args/GroupByQuestionArgs");
const UpdateManyQuestionArgs_1 = require("./args/UpdateManyQuestionArgs");
const UpdateQuestionArgs_1 = require("./args/UpdateQuestionArgs");
const UpsertQuestionArgs_1 = require("./args/UpsertQuestionArgs");
const helpers_1 = require("../../../helpers");
const Question_1 = require("../../../models/Question");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateQuestion_1 = require("../../outputs/AggregateQuestion");
const QuestionGroupBy_1 = require("../../outputs/QuestionGroupBy");
let QuestionCrudResolver = class QuestionCrudResolver {
    async question(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstQuestion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async questions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createQuestion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManyQuestion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteQuestion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateQuestion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyQuestion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManyQuestion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertQuestion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateQuestion(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).question.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupByQuestion(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).question.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Question_1.Question, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueQuestionArgs_1.FindUniqueQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "question", null);
__decorate([
    TypeGraphQL.Query(_returns => Question_1.Question, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstQuestionArgs_1.FindFirstQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "findFirstQuestion", null);
__decorate([
    TypeGraphQL.Query(_returns => [Question_1.Question], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyQuestionArgs_1.FindManyQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "questions", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Question_1.Question, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateQuestionArgs_1.CreateQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "createQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyQuestionArgs_1.CreateManyQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "createManyQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Question_1.Question, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteQuestionArgs_1.DeleteQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "deleteQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Question_1.Question, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateQuestionArgs_1.UpdateQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "updateQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyQuestionArgs_1.DeleteManyQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "deleteManyQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyQuestionArgs_1.UpdateManyQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "updateManyQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Question_1.Question, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertQuestionArgs_1.UpsertQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "upsertQuestion", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateQuestion_1.AggregateQuestion, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateQuestionArgs_1.AggregateQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "aggregateQuestion", null);
__decorate([
    TypeGraphQL.Query(_returns => [QuestionGroupBy_1.QuestionGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByQuestionArgs_1.GroupByQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "groupByQuestion", null);
QuestionCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Question_1.Question)
], QuestionCrudResolver);
exports.QuestionCrudResolver = QuestionCrudResolver;
//# sourceMappingURL=QuestionCrudResolver.js.map