"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("../../../prisma/generated/type-graphql");
const validations_1 = require("../validations");
const aboutModelConfig = {
    fields: Object.assign({}, validations_1.aboutPropsValidation),
};
const projectModelConfig = {
    fields: Object.assign({}, validations_1.projectPropsValidation),
};
const adminModelConfig = {
    fields: Object.assign({}, validations_1.adminPropsValidation),
};
const sketchModelConfig = {
    fields: Object.assign({}, validations_1.sketchPropsValidation),
};
const messageModelConfig = {
    fields: Object.assign({}, validations_1.messagePropsValidation),
};
const questionModelConfig = {
    fields: Object.assign({}, validations_1.questionPropsValidation),
};
const techCategoryModelConfig = {
    fields: Object.assign({}, validations_1.techCategoryPropsValidation),
};
const techModelConfig = {
    fields: Object.assign({}, validations_1.techPropsValidation),
};
const modelsEnhanceMap = {
    Project: projectModelConfig,
    About: aboutModelConfig,
    Admin: adminModelConfig,
    Message: messageModelConfig,
    Sketch: sketchModelConfig,
    Tech: techModelConfig,
    TechCategory: techCategoryModelConfig,
    Question: questionModelConfig,
};
exports.default = () => {
    (0, type_graphql_1.applyModelsEnhanceMap)(modelsEnhanceMap);
};
//# sourceMappingURL=ModelMiddlewares.js.map