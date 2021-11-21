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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateWithoutMessagesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AboutUpdateManyWithoutAdminInput_1 = require("../inputs/AboutUpdateManyWithoutAdminInput");
const AdminUpdateresumesInput_1 = require("../inputs/AdminUpdateresumesInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProjectUpdateManyWithoutAdminInput_1 = require("../inputs/ProjectUpdateManyWithoutAdminInput");
const StackUpdateManyWithoutAdminInput_1 = require("../inputs/StackUpdateManyWithoutAdminInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AdminUpdateWithoutMessagesInput = class AdminUpdateWithoutMessagesInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "fname", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "lname", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "linkedIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "whatsapp", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "instagram", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "github", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "skype", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "heroImage", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "confirmed", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminUpdateresumesInput_1.AdminUpdateresumesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "resumes", void 0);
__decorate([
    TypeGraphQL.Field(_type => AboutUpdateManyWithoutAdminInput_1.AboutUpdateManyWithoutAdminInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "about", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateManyWithoutAdminInput_1.ProjectUpdateManyWithoutAdminInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "projects", void 0);
__decorate([
    TypeGraphQL.Field(_type => StackUpdateManyWithoutAdminInput_1.StackUpdateManyWithoutAdminInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateWithoutMessagesInput.prototype, "stack", void 0);
AdminUpdateWithoutMessagesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], AdminUpdateWithoutMessagesInput);
exports.AdminUpdateWithoutMessagesInput = AdminUpdateWithoutMessagesInput;
//# sourceMappingURL=AdminUpdateWithoutMessagesInput.js.map