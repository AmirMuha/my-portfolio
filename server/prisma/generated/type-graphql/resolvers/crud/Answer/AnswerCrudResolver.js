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
exports.AnswerCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateAnswerArgs_1 = require("./args/AggregateAnswerArgs");
const CreateAnswerArgs_1 = require("./args/CreateAnswerArgs");
const CreateManyAnswerArgs_1 = require("./args/CreateManyAnswerArgs");
const DeleteAnswerArgs_1 = require("./args/DeleteAnswerArgs");
const DeleteManyAnswerArgs_1 = require("./args/DeleteManyAnswerArgs");
const FindFirstAnswerArgs_1 = require("./args/FindFirstAnswerArgs");
const FindManyAnswerArgs_1 = require("./args/FindManyAnswerArgs");
const FindUniqueAnswerArgs_1 = require("./args/FindUniqueAnswerArgs");
const GroupByAnswerArgs_1 = require("./args/GroupByAnswerArgs");
const UpdateAnswerArgs_1 = require("./args/UpdateAnswerArgs");
const UpdateManyAnswerArgs_1 = require("./args/UpdateManyAnswerArgs");
const UpsertAnswerArgs_1 = require("./args/UpsertAnswerArgs");
const helpers_1 = require("../../../helpers");
const Answer_1 = require("../../../models/Answer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAnswer_1 = require("../../outputs/AggregateAnswer");
const AnswerGroupBy_1 = require("../../outputs/AnswerGroupBy");
let AnswerCrudResolver = class AnswerCrudResolver {
    async answer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAnswer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async answers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAnswer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAnswer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAnswer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAnswer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAnswer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAnswer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAnswer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAnswer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAnswer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).answer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Answer_1.Answer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAnswerArgs_1.FindUniqueAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "answer", null);
__decorate([
    TypeGraphQL.Query(_returns => Answer_1.Answer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAnswerArgs_1.FindFirstAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "findFirstAnswer", null);
__decorate([
    TypeGraphQL.Query(_returns => [Answer_1.Answer], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyAnswerArgs_1.FindManyAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "answers", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Answer_1.Answer, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateAnswerArgs_1.CreateAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "createAnswer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAnswerArgs_1.CreateManyAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "createManyAnswer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Answer_1.Answer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteAnswerArgs_1.DeleteAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "deleteAnswer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Answer_1.Answer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateAnswerArgs_1.UpdateAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "updateAnswer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyAnswerArgs_1.DeleteManyAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "deleteManyAnswer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyAnswerArgs_1.UpdateManyAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "updateManyAnswer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Answer_1.Answer, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertAnswerArgs_1.UpsertAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "upsertAnswer", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateAnswer_1.AggregateAnswer, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAnswerArgs_1.AggregateAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "aggregateAnswer", null);
__decorate([
    TypeGraphQL.Query(_returns => [AnswerGroupBy_1.AnswerGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByAnswerArgs_1.GroupByAnswerArgs]),
    __metadata("design:returntype", Promise)
], AnswerCrudResolver.prototype, "groupByAnswer", null);
AnswerCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Answer_1.Answer)
], AnswerCrudResolver);
exports.AnswerCrudResolver = AnswerCrudResolver;
