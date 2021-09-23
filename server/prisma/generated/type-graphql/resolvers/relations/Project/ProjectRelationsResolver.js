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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Admin_1 = require("../../../models/Admin");
const Project_1 = require("../../../models/Project");
const Question_1 = require("../../../models/Question");
const Sketch_1 = require("../../../models/Sketch");
const TechCategory_1 = require("../../../models/TechCategory");
const ProjectQuestionsArgs_1 = require("./args/ProjectQuestionsArgs");
const ProjectSketchesArgs_1 = require("./args/ProjectSketchesArgs");
const ProjectTech_categoriesArgs_1 = require("./args/ProjectTech_categoriesArgs");
const helpers_1 = require("../../../helpers");
let ProjectRelationsResolver = class ProjectRelationsResolver {
    async tech_categories(project, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUnique({
            where: {
                id: project.id,
            },
        }).tech_categories(args);
    }
    async questions(project, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUnique({
            where: {
                id: project.id,
            },
        }).questions(args);
    }
    async sketches(project, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUnique({
            where: {
                id: project.id,
            },
        }).sketches(args);
    }
    async admin(project, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUnique({
            where: {
                id: project.id,
            },
        }).admin({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [TechCategory_1.TechCategory], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Project_1.Project, Object, ProjectTech_categoriesArgs_1.ProjectTech_categoriesArgs]),
    __metadata("design:returntype", Promise)
], ProjectRelationsResolver.prototype, "tech_categories", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Question_1.Question], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Project_1.Project, Object, ProjectQuestionsArgs_1.ProjectQuestionsArgs]),
    __metadata("design:returntype", Promise)
], ProjectRelationsResolver.prototype, "questions", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Sketch_1.Sketch], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Project_1.Project, Object, ProjectSketchesArgs_1.ProjectSketchesArgs]),
    __metadata("design:returntype", Promise)
], ProjectRelationsResolver.prototype, "sketches", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Admin_1.Admin, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Project_1.Project, Object]),
    __metadata("design:returntype", Promise)
], ProjectRelationsResolver.prototype, "admin", null);
ProjectRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], ProjectRelationsResolver);
exports.ProjectRelationsResolver = ProjectRelationsResolver;
