"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("../../../prisma/generated/type-graphql");
const ConnectToAdmin_1 = require("../ConnectToAdmin");
const type_graphql_2 = require("type-graphql");
const isLoggedIn_1 = require("../isLoggedIn");
const resolversEnhanceMap = {
    About: {
        updateAbout: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        createAbout: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn, ConnectToAdmin_1.ConnectToAdmin)],
        deleteAbout: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteManyAbout: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
    },
    Tech: {
        updateTech: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        createTech: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteTech: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteManyTech: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
    },
    TechCategory: {
        updateTechCategory: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        createTechCategory: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteTechCategory: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteManyTechCategory: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
    },
    Project: {
        updateProject: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        createProject: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn, ConnectToAdmin_1.ConnectToAdmin)],
        deleteProject: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteManyProject: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
    },
    Message: {
        updateMessage: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        createMessage: [(0, type_graphql_2.UseMiddleware)()],
        deleteMessage: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteManyMessage: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
    },
    Question: {
        updateQuestion: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        createQuestion: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteQuestion: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteManyQuestion: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
    },
    Sketch: {
        updateSketch: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        createSketch: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteSketch: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
        deleteManySketch: [(0, type_graphql_2.UseMiddleware)(isLoggedIn_1.isLoggedIn)],
    },
};
exports.default = () => {
    (0, type_graphql_1.applyResolversEnhanceMap)(resolversEnhanceMap);
};
//# sourceMappingURL=ResolverMiddlewares.js.map