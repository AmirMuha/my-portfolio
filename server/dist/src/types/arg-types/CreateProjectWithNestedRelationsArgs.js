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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectWithNestedRelationsArgs = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let TechCategoryCreateInput_PWNR = class TechCategoryCreateInput_PWNR {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 20),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TechCategoryCreateInput_PWNR.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TechCreateInput_PWNR]),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], TechCategoryCreateInput_PWNR.prototype, "techs", void 0);
TechCategoryCreateInput_PWNR = __decorate([
    (0, type_graphql_1.InputType)()
], TechCategoryCreateInput_PWNR);
let TechCreateInput_PWNR = class TechCreateInput_PWNR {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 20),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TechCreateInput_PWNR.prototype, "name", void 0);
TechCreateInput_PWNR = __decorate([
    (0, type_graphql_1.InputType)()
], TechCreateInput_PWNR);
let SketchCreateInput_PWNR = class SketchCreateInput_PWNR {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 20),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SketchCreateInput_PWNR.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(50, 150),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SketchCreateInput_PWNR.prototype, "summary", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(300),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SketchCreateInput_PWNR.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/\.(png|jpeg|webp|jpg|svg)$/i),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SketchCreateInput_PWNR.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], SketchCreateInput_PWNR.prototype, "downloadables", void 0);
SketchCreateInput_PWNR = __decorate([
    (0, type_graphql_1.InputType)()
], SketchCreateInput_PWNR);
let QuestionCreateInput_PWNR = class QuestionCreateInput_PWNR {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuestionCreateInput_PWNR.prototype, "question", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuestionCreateInput_PWNR.prototype, "answer", void 0);
QuestionCreateInput_PWNR = __decorate([
    (0, type_graphql_1.InputType)()
], QuestionCreateInput_PWNR);
let CreateProjectInput_PWNR = class CreateProjectInput_PWNR {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectInput_PWNR.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectInput_PWNR.prototype, "summary", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectInput_PWNR.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectInput_PWNR.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProjectInput_PWNR.prototype, "github_url", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProjectInput_PWNR.prototype, "app_url", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TechCategoryCreateInput_PWNR]),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CreateProjectInput_PWNR.prototype, "techCategories", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [SketchCreateInput_PWNR]),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CreateProjectInput_PWNR.prototype, "sketches", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [QuestionCreateInput_PWNR]),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CreateProjectInput_PWNR.prototype, "questions", void 0);
CreateProjectInput_PWNR = __decorate([
    (0, type_graphql_1.InputType)()
], CreateProjectInput_PWNR);
let CreateProjectWithNestedRelationsArgs = class CreateProjectWithNestedRelationsArgs {
};
__decorate([
    (0, type_graphql_1.Field)(() => CreateProjectInput_PWNR),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", CreateProjectInput_PWNR)
], CreateProjectWithNestedRelationsArgs.prototype, "data", void 0);
CreateProjectWithNestedRelationsArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], CreateProjectWithNestedRelationsArgs);
exports.CreateProjectWithNestedRelationsArgs = CreateProjectWithNestedRelationsArgs;
//# sourceMappingURL=CreateProjectWithNestedRelationsArgs.js.map