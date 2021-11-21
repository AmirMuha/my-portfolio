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
exports.TechCategoryCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateTechCategoryArgs_1 = require("./args/AggregateTechCategoryArgs");
const CreateManyTechCategoryArgs_1 = require("./args/CreateManyTechCategoryArgs");
const CreateTechCategoryArgs_1 = require("./args/CreateTechCategoryArgs");
const DeleteManyTechCategoryArgs_1 = require("./args/DeleteManyTechCategoryArgs");
const DeleteTechCategoryArgs_1 = require("./args/DeleteTechCategoryArgs");
const FindFirstTechCategoryArgs_1 = require("./args/FindFirstTechCategoryArgs");
const FindManyTechCategoryArgs_1 = require("./args/FindManyTechCategoryArgs");
const FindUniqueTechCategoryArgs_1 = require("./args/FindUniqueTechCategoryArgs");
const GroupByTechCategoryArgs_1 = require("./args/GroupByTechCategoryArgs");
const UpdateManyTechCategoryArgs_1 = require("./args/UpdateManyTechCategoryArgs");
const UpdateTechCategoryArgs_1 = require("./args/UpdateTechCategoryArgs");
const UpsertTechCategoryArgs_1 = require("./args/UpsertTechCategoryArgs");
const helpers_1 = require("../../../helpers");
const TechCategory_1 = require("../../../models/TechCategory");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTechCategory_1 = require("../../outputs/AggregateTechCategory");
const TechCategoryGroupBy_1 = require("../../outputs/TechCategoryGroupBy");
let TechCategoryCrudResolver = class TechCategoryCrudResolver {
    async techCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstTechCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async techCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createTechCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManyTechCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteTechCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateTechCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyTechCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManyTechCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertTechCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateTechCategory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupByTechCategory(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).techCategory.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => TechCategory_1.TechCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTechCategoryArgs_1.FindUniqueTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "techCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => TechCategory_1.TechCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTechCategoryArgs_1.FindFirstTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "findFirstTechCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => [TechCategory_1.TechCategory], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyTechCategoryArgs_1.FindManyTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "techCategories", null);
__decorate([
    TypeGraphQL.Mutation(_returns => TechCategory_1.TechCategory, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateTechCategoryArgs_1.CreateTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "createTechCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyTechCategoryArgs_1.CreateManyTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "createManyTechCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => TechCategory_1.TechCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteTechCategoryArgs_1.DeleteTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "deleteTechCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => TechCategory_1.TechCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateTechCategoryArgs_1.UpdateTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "updateTechCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyTechCategoryArgs_1.DeleteManyTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "deleteManyTechCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyTechCategoryArgs_1.UpdateManyTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "updateManyTechCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => TechCategory_1.TechCategory, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertTechCategoryArgs_1.UpsertTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "upsertTechCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateTechCategory_1.AggregateTechCategory, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateTechCategoryArgs_1.AggregateTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "aggregateTechCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => [TechCategoryGroupBy_1.TechCategoryGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByTechCategoryArgs_1.GroupByTechCategoryArgs]),
    __metadata("design:returntype", Promise)
], TechCategoryCrudResolver.prototype, "groupByTechCategory", null);
TechCategoryCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => TechCategory_1.TechCategory)
], TechCategoryCrudResolver);
exports.TechCategoryCrudResolver = TechCategoryCrudResolver;
//# sourceMappingURL=TechCategoryCrudResolver.js.map