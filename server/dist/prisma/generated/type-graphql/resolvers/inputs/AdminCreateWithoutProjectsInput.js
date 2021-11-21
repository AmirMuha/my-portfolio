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
exports.AdminCreateWithoutProjectsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AboutCreateNestedManyWithoutAdminInput_1 = require("../inputs/AboutCreateNestedManyWithoutAdminInput");
const AdminCreateresumesInput_1 = require("../inputs/AdminCreateresumesInput");
const MessageCreateNestedManyWithoutAdminInput_1 = require("../inputs/MessageCreateNestedManyWithoutAdminInput");
const StackCreateNestedManyWithoutAdminInput_1 = require("../inputs/StackCreateNestedManyWithoutAdminInput");
let AdminCreateWithoutProjectsInput = class AdminCreateWithoutProjectsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminCreateWithoutProjectsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "fname", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "lname", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "linkedIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "whatsapp", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "instagram", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "github", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "skype", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "heroImage", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminCreateWithoutProjectsInput.prototype, "confirmed", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AdminCreateWithoutProjectsInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminCreateWithoutProjectsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminCreateWithoutProjectsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminCreateresumesInput_1.AdminCreateresumesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminCreateWithoutProjectsInput.prototype, "resumes", void 0);
__decorate([
    TypeGraphQL.Field(_type => AboutCreateNestedManyWithoutAdminInput_1.AboutCreateNestedManyWithoutAdminInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminCreateWithoutProjectsInput.prototype, "about", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutAdminInput_1.MessageCreateNestedManyWithoutAdminInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminCreateWithoutProjectsInput.prototype, "messages", void 0);
__decorate([
    TypeGraphQL.Field(_type => StackCreateNestedManyWithoutAdminInput_1.StackCreateNestedManyWithoutAdminInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminCreateWithoutProjectsInput.prototype, "stack", void 0);
AdminCreateWithoutProjectsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], AdminCreateWithoutProjectsInput);
exports.AdminCreateWithoutProjectsInput = AdminCreateWithoutProjectsInput;
//# sourceMappingURL=AdminCreateWithoutProjectsInput.js.map