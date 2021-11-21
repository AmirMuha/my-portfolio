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
exports.SketchCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateSketchArgs_1 = require("./args/AggregateSketchArgs");
const CreateManySketchArgs_1 = require("./args/CreateManySketchArgs");
const CreateSketchArgs_1 = require("./args/CreateSketchArgs");
const DeleteManySketchArgs_1 = require("./args/DeleteManySketchArgs");
const DeleteSketchArgs_1 = require("./args/DeleteSketchArgs");
const FindFirstSketchArgs_1 = require("./args/FindFirstSketchArgs");
const FindManySketchArgs_1 = require("./args/FindManySketchArgs");
const FindUniqueSketchArgs_1 = require("./args/FindUniqueSketchArgs");
const GroupBySketchArgs_1 = require("./args/GroupBySketchArgs");
const UpdateManySketchArgs_1 = require("./args/UpdateManySketchArgs");
const UpdateSketchArgs_1 = require("./args/UpdateSketchArgs");
const UpsertSketchArgs_1 = require("./args/UpsertSketchArgs");
const helpers_1 = require("../../../helpers");
const Sketch_1 = require("../../../models/Sketch");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSketch_1 = require("../../outputs/AggregateSketch");
const SketchGroupBy_1 = require("../../outputs/SketchGroupBy");
let SketchCrudResolver = class SketchCrudResolver {
    async sketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstSketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async sketches(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createSketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManySketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteSketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateSketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManySketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManySketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertSketch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateSketch(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupBySketch(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sketch.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Sketch_1.Sketch, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSketchArgs_1.FindUniqueSketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "sketch", null);
__decorate([
    TypeGraphQL.Query(_returns => Sketch_1.Sketch, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSketchArgs_1.FindFirstSketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "findFirstSketch", null);
__decorate([
    TypeGraphQL.Query(_returns => [Sketch_1.Sketch], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySketchArgs_1.FindManySketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "sketches", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Sketch_1.Sketch, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateSketchArgs_1.CreateSketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "createSketch", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManySketchArgs_1.CreateManySketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "createManySketch", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Sketch_1.Sketch, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteSketchArgs_1.DeleteSketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "deleteSketch", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Sketch_1.Sketch, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateSketchArgs_1.UpdateSketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "updateSketch", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySketchArgs_1.DeleteManySketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "deleteManySketch", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySketchArgs_1.UpdateManySketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "updateManySketch", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Sketch_1.Sketch, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertSketchArgs_1.UpsertSketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "upsertSketch", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSketch_1.AggregateSketch, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSketchArgs_1.AggregateSketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "aggregateSketch", null);
__decorate([
    TypeGraphQL.Query(_returns => [SketchGroupBy_1.SketchGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySketchArgs_1.GroupBySketchArgs]),
    __metadata("design:returntype", Promise)
], SketchCrudResolver.prototype, "groupBySketch", null);
SketchCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Sketch_1.Sketch)
], SketchCrudResolver);
exports.SketchCrudResolver = SketchCrudResolver;
//# sourceMappingURL=SketchCrudResolver.js.map