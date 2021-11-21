"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../../prisma/generated/type-graphql");
const CountAdmins_1 = __importDefault(require("../CountAdmins"));
const isLoggedIn_1 = require("../isLoggedIn");
const NotAllowedToCreateAdmin_1 = require("../NotAllowedToCreateAdmin");
const adminRelationResolverActionsConfig = {};
const aboutRelationResolverActionsConfig = {
    admin: [
        (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
        (0, type_graphql_1.UseMiddleware)(CountAdmins_1.default),
        (0, type_graphql_1.UseMiddleware)(NotAllowedToCreateAdmin_1.NotAllowedToCreateAdmin),
    ],
};
const projectRelationResolverActionsConfig = {
    admin: [
        (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
        (0, type_graphql_1.UseMiddleware)(CountAdmins_1.default),
        (0, type_graphql_1.UseMiddleware)(NotAllowedToCreateAdmin_1.NotAllowedToCreateAdmin),
    ],
};
const messageRelationResolverActionsConfig = {
    admin: [
        (0, type_graphql_1.UseMiddleware)(isLoggedIn_1.isLoggedIn),
        (0, type_graphql_1.UseMiddleware)(CountAdmins_1.default),
        (0, type_graphql_1.UseMiddleware)(NotAllowedToCreateAdmin_1.NotAllowedToCreateAdmin),
    ],
};
const relationResolversEnhanceMap = {
    Admin: adminRelationResolverActionsConfig,
    About: aboutRelationResolverActionsConfig,
    Message: messageRelationResolverActionsConfig,
    Project: projectRelationResolverActionsConfig,
};
exports.default = () => {
    (0, type_graphql_2.applyRelationResolversEnhanceMap)(relationResolversEnhanceMap);
};
//# sourceMappingURL=RelationMiddlewares.js.map