"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectWithNestedRelationsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const CreateProjectWithNestedRelationsArgs_1 = require("../types/arg-types/CreateProjectWithNestedRelationsArgs");
const isLoggedIn_1 = require("../middlewares/isLoggedIn");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let CreateProjectWithNestedRelationsResolver = class CreateProjectWithNestedRelationsResolver {
    async createProjectWithNestedRelations({ prisma, data: { userId } }, { data }) {
        var e_1, _a, e_2, _b;
        let questionsPromise;
        const sketchPromises = [];
        const techCategoriesPromises = [];
        const project = await prisma.project.create({
            data: {
                app_url: data.app_url,
                github_url: data.github_url,
                summary: data.summary,
                name: data.name,
                type: data.type,
                image: data.image,
                admin_id: userId,
            },
            select: {
                id: true,
                image: true,
            },
        });
        if (project) {
            fs_1.default.renameSync(path_1.default.join(__dirname, "../uploads/temp/", project.image), path_1.default.join(__dirname, "../uploads/", project.image));
            try {
                for (var _c = __asyncValues(data.sketches), _d; _d = await _c.next(), !_d.done;) {
                    const sk = _d.value;
                    const skPromise = await prisma.sketch.create({
                        data: {
                            title: sk.title,
                            description: sk.description,
                            summary: sk.summary,
                            image: sk.image,
                            downloadables: sk.downloadables,
                            project_id: project.id,
                        },
                    });
                    if (skPromise) {
                        sketchPromises.push(skPromise);
                        fs_1.default.renameSync(path_1.default.join(__dirname, "../uploads/temp/", skPromise.image), path_1.default.join(__dirname, "../uploads/", skPromise.image));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) await _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (data.questions.length > 0) {
                questionsPromise = await prisma.question.createMany({
                    data: data.questions.map((q) => ({
                        project_id: project.id,
                        question: q.question,
                        answer: q.answer,
                    })),
                });
            }
            try {
                for (var _e = __asyncValues(data.techCategories), _f; _f = await _e.next(), !_f.done;) {
                    const tc = _f.value;
                    const tcPromise = await prisma.techCategory.create({
                        data: {
                            name: tc.name,
                            techs: { createMany: { data: tc.techs } },
                            project_id: project.id,
                        },
                    });
                    if (tcPromise) {
                        techCategoriesPromises.push(tcPromise);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) await _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return Promise.all([
            ...techCategoriesPromises,
            ...sketchPromises,
            questionsPromise,
        ])
            .then(() => {
            return true;
        })
            .catch(async (e) => {
            await prisma.project.delete({
                where: {
                    id: project.id,
                },
            });
            return e.message;
        });
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
    (0, type_graphql_1.Mutation)(() => Boolean || String),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateProjectWithNestedRelationsArgs_1.CreateProjectWithNestedRelationsArgs]),
    __metadata("design:returntype", Promise)
], CreateProjectWithNestedRelationsResolver.prototype, "createProjectWithNestedRelations", null);
CreateProjectWithNestedRelationsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreateProjectWithNestedRelationsResolver);
exports.CreateProjectWithNestedRelationsResolver = CreateProjectWithNestedRelationsResolver;
//# sourceMappingURL=Project.js.map