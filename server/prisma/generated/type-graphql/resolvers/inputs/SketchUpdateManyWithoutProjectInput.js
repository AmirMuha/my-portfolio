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
exports.SketchUpdateManyWithoutProjectInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SketchCreateManyProjectInputEnvelope_1 = require("../inputs/SketchCreateManyProjectInputEnvelope");
const SketchCreateOrConnectWithoutProjectInput_1 = require("../inputs/SketchCreateOrConnectWithoutProjectInput");
const SketchCreateWithoutProjectInput_1 = require("../inputs/SketchCreateWithoutProjectInput");
const SketchScalarWhereInput_1 = require("../inputs/SketchScalarWhereInput");
const SketchUpdateManyWithWhereWithoutProjectInput_1 = require("../inputs/SketchUpdateManyWithWhereWithoutProjectInput");
const SketchUpdateWithWhereUniqueWithoutProjectInput_1 = require("../inputs/SketchUpdateWithWhereUniqueWithoutProjectInput");
const SketchUpsertWithWhereUniqueWithoutProjectInput_1 = require("../inputs/SketchUpsertWithWhereUniqueWithoutProjectInput");
const SketchWhereUniqueInput_1 = require("../inputs/SketchWhereUniqueInput");
let SketchUpdateManyWithoutProjectInput = class SketchUpdateManyWithoutProjectInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SketchCreateWithoutProjectInput_1.SketchCreateWithoutProjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchCreateOrConnectWithoutProjectInput_1.SketchCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchUpsertWithWhereUniqueWithoutProjectInput_1.SketchUpsertWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SketchCreateManyProjectInputEnvelope_1.SketchCreateManyProjectInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", SketchCreateManyProjectInputEnvelope_1.SketchCreateManyProjectInputEnvelope)
], SketchUpdateManyWithoutProjectInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchWhereUniqueInput_1.SketchWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchWhereUniqueInput_1.SketchWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchWhereUniqueInput_1.SketchWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchWhereUniqueInput_1.SketchWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchUpdateWithWhereUniqueWithoutProjectInput_1.SketchUpdateWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchUpdateManyWithWhereWithoutProjectInput_1.SketchUpdateManyWithWhereWithoutProjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SketchScalarWhereInput_1.SketchScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SketchUpdateManyWithoutProjectInput.prototype, "deleteMany", void 0);
SketchUpdateManyWithoutProjectInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SketchUpdateManyWithoutProjectInput);
exports.SketchUpdateManyWithoutProjectInput = SketchUpdateManyWithoutProjectInput;
