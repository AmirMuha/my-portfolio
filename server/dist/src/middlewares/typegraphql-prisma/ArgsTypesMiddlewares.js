"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("../../../prisma/generated/type-graphql");
const class_validator_1 = require("class-validator");
const argsTypesEnhanceMap = {
    CreateAdminArgs: { fields: { data: [(0, class_validator_1.ValidateNested)()] } },
    CreateAboutArgs: { fields: { data: [(0, class_validator_1.ValidateNested)()] } },
    CreateMessageArgs: { fields: { data: [(0, class_validator_1.ValidateNested)()] } },
    CreateTechArgs: { fields: { data: [(0, class_validator_1.ValidateNested)()] } },
    CreateProjectArgs: { fields: { data: [(0, class_validator_1.ValidateNested)()] } },
    CreateTechCategoryArgs: { fields: { data: [(0, class_validator_1.ValidateNested)()] } },
    CreateSketchArgs: { fields: { data: [(0, class_validator_1.ValidateNested)()] } },
    CreateQuestionArgs: { fields: { data: [(0, class_validator_1.ValidateNested)()] } },
    DeleteAdminArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    DeleteAboutArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    DeleteMessageArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    DeleteTechArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    DeleteProjectArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    DeleteTechCategoryArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    DeleteSketchArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    DeleteQuestionArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    FindUniqueAdminArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    FindUniqueAboutArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    FindUniqueMessageArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    FindUniqueTechArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    FindUniqueProjectArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    FindUniqueTechCategoryArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    FindUniqueSketchArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
    FindUniqueQuestionArgs: { fields: { where: [(0, class_validator_1.ValidateNested)()] } },
};
exports.default = () => {
    (0, type_graphql_1.applyArgsTypesEnhanceMap)(argsTypesEnhanceMap);
};
//# sourceMappingURL=ArgsTypesMiddlewares.js.map