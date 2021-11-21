"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InputTypeMiddlewares_1 = __importDefault(require("./InputTypeMiddlewares"));
const ModelMiddlewares_1 = __importDefault(require("./ModelMiddlewares"));
const ResolverMiddlewares_1 = __importDefault(require("./ResolverMiddlewares"));
const ArgsTypesMiddlewares_1 = __importDefault(require("./ArgsTypesMiddlewares"));
const RelationMiddlewares_1 = __importDefault(require("./RelationMiddlewares"));
const applyMiddlewares = () => {
    (0, InputTypeMiddlewares_1.default)();
    (0, ArgsTypesMiddlewares_1.default)();
    (0, ModelMiddlewares_1.default)();
    (0, ResolverMiddlewares_1.default)();
    (0, RelationMiddlewares_1.default)();
};
exports.default = applyMiddlewares;
//# sourceMappingURL=applyAllMiddlewares.js.map