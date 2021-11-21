"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("../../../prisma/generated/type-graphql");
const validations_1 = require("../validations");
const adminCreateInputTypeConfig = {
    fields: Object.assign({}, validations_1.adminPropsValidation),
};
const aboutCreateInputTypeConfig = {
    fields: Object.assign({}, validations_1.aboutPropsValidation),
};
const aboutUpdateInputTypeConfig = {
    fields: Object.assign({}, validations_1.aboutPropsValidation),
};
const techUpdateInputTypeConfig = {
    fields: Object.assign({}, validations_1.techPropsValidation),
};
const techCreateInputTypeConfig = {
    fields: Object.assign({}, validations_1.techPropsValidation),
};
const techCategoryUpdateInputTypeConfig = {
    fields: Object.assign({}, validations_1.techCategoryPropsValidation),
};
const techCategoryCreateInputTypeConfig = {
    fields: Object.assign({}, validations_1.techCategoryPropsValidation),
};
const questionUpdateInputTypeConfig = {
    fields: Object.assign({}, validations_1.questionPropsValidation),
};
const questionCreateInputTypeConfig = {
    fields: Object.assign({}, validations_1.questionPropsValidation),
};
const sketchUpdateInputTypeConfig = {
    fields: Object.assign({}, validations_1.sketchPropsValidation),
};
const sketchCreateInputTypeConfig = {
    fields: Object.assign({}, validations_1.sketchPropsValidation),
};
const projectUpdateInputTypeConfig = {
    fields: Object.assign({}, validations_1.projectPropsValidation),
};
const projectCreateInputTypeConfig = {
    fields: Object.assign({}, validations_1.projectPropsValidation),
};
const messageUpdateInputTypeConfig = {
    fields: Object.assign({}, validations_1.messagePropsValidation),
};
const messageCreateInputTypeConfig = {
    fields: Object.assign({}, validations_1.messagePropsValidation),
};
const inputTypesEnhanceMap = {
    AdminCreateInput: adminCreateInputTypeConfig,
    AboutCreateInput: aboutCreateInputTypeConfig,
    AboutUpdateInput: aboutUpdateInputTypeConfig,
    TechCreateInput: techCreateInputTypeConfig,
    TechUpdateInput: techUpdateInputTypeConfig,
    TechCategoryCreateInput: techCategoryCreateInputTypeConfig,
    TechCategoryUpdateInput: techCategoryUpdateInputTypeConfig,
    QuestionCreateInput: questionCreateInputTypeConfig,
    QuestionUpdateInput: questionUpdateInputTypeConfig,
    SketchCreateInput: sketchCreateInputTypeConfig,
    SketchUpdateInput: sketchUpdateInputTypeConfig,
    ProjectCreateInput: projectCreateInputTypeConfig,
    ProjectUpdateInput: projectUpdateInputTypeConfig,
    MessageCreateInput: messageCreateInputTypeConfig,
    MessageUpdateInput: messageUpdateInputTypeConfig,
};
exports.default = () => {
    (0, type_graphql_1.applyInputTypesEnhanceMap)(inputTypesEnhanceMap);
};
//# sourceMappingURL=InputTypeMiddlewares.js.map