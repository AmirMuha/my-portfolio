"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagePropsValidation = exports.sketchPropsValidation = exports.questionPropsValidation = exports.projectPropsValidation = exports.techCategoryPropsValidation = exports.techPropsValidation = exports.aboutPropsValidation = exports.adminPropsValidation = void 0;
const class_validator_1 = require("class-validator");
exports.adminPropsValidation = {
    id: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUUID)()],
    email: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsEmail)()],
    fname: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Length)(3, 20)],
    lname: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Length)(3, 20)],
    password: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MinLength)(8)],
    github: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUrl)()],
    linkedIn: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUrl)()],
    instagram: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUrl)()],
    whatsapp: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
    heroImage: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
};
exports.aboutPropsValidation = {
    id: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUUID)()],
    body: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
    title: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
};
exports.techPropsValidation = {
    id: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUUID)()],
    name: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
};
exports.techCategoryPropsValidation = {
    id: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUUID)()],
    name: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
};
exports.projectPropsValidation = {
    id: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUUID)()],
    image: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
    app_url: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUrl)()],
    description: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
    github_url: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUrl)()],
    name: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
};
exports.questionPropsValidation = {
    id: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUUID)()],
    question: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
};
exports.sketchPropsValidation = {
    id: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUUID)()],
    description: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
    summary: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
    download_link: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUrl)()],
    image: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
    title: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
};
exports.messagePropsValidation = {
    id: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsUUID)()],
    body: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
    from: [(0, class_validator_1.IsEmail)()],
    read_status: [(0, class_validator_1.IsBoolean)()],
    answer_status: [(0, class_validator_1.IsBoolean)()],
    subject: [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()],
};
//# sourceMappingURL=validations.js.map