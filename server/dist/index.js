"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./src/utils/configuringEnvironmentVariables");
const apollo_server_core_1 = require("apollo-server-core");
const graphql_1 = require("graphql");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const Upload_1 = require("./src/resolvers/Upload");
const envs_and_consts_1 = require("./src/constants/envs-and-consts");
const applyAllMiddlewares_1 = __importDefault(require("./src/middlewares/typegraphql-prisma/applyAllMiddlewares"));
const chalk_1 = require("./src/chalk");
const type_graphql_1 = require("type-graphql");
const cors_1 = __importDefault(require("cors"));
const download_1 = __importDefault(require("./src/routes/download"));
const graphql_upload_1 = require("graphql-upload");
const helmet_1 = __importDefault(require("helmet"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const prisma_client_1 = __importDefault(require("./src/prisma-client"));
const redis_client_1 = require("./src/redis-client");
const connect_redis_1 = __importDefault(require("connect-redis"));
const allResolvers_1 = __importDefault(require("./src/resolvers/allResolvers"));
const express_session_1 = __importDefault(require("express-session"));
const uuid_1 = require("uuid");
process.on("uncaughtException", (e) => {
    console.error(e);
});
const app = (0, express_1.default)();
const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
const main = async () => {
    const httpServer = http_1.default.createServer(app);
    app.use((0, cors_1.default)({
        credentials: true,
        origin: process.env.NODE_ENV === "development"
            ? ["http://localhost:8000", "http://localhost:9000"]
            : "https://portfolio.amirmuha.com",
    }));
    console.log(process.env.SESSION_SECRET);
    app.use((0, express_session_1.default)({
        name: "sid",
        store: new RedisStore({ client: redis_client_1.redis }),
        secret: process.env.SESSION_SECRET,
        genid: () => {
            return (0, uuid_1.v4)();
        },
        resave: true,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: envs_and_consts_1.__prod__,
            maxAge: parseInt(process.env.SESSION_MAX_AGE_DAYS) * 24 * 60 * 60 * 1000,
        },
    }));
    app.use(express_1.default.static(path_1.default.join(__dirname, "./src/uploads/")));
    app.use("/download/", download_1.default);
    (0, applyAllMiddlewares_1.default)();
    const schema = (0, type_graphql_1.buildSchemaSync)({
        resolvers: [...allResolvers_1.default, Upload_1.UploadResolver],
        emitSchemaFile: true,
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({ prisma: prisma_client_1.default, req, res, data: {} }),
        plugins: [
            envs_and_consts_1.__prod__
                ? (0, apollo_server_core_1.ApolloServerPluginLandingPageProductionDefault)({
                    footer: false,
                })
                : (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
            {
                async serverWillStart() {
                    return {
                        async drainServer() {
                            subscriptionServer.close();
                        },
                    };
                },
            },
        ],
    });
    const subscriptionServer = subscriptions_transport_ws_1.SubscriptionServer.create({
        schema,
        execute: graphql_1.execute,
        subscribe: graphql_1.subscribe,
    }, {
        server: httpServer,
        path: server.graphqlPath,
    });
    app.use((0, graphql_upload_1.graphqlUploadExpress)({}));
    await server.start();
    server.applyMiddleware({
        app,
        cors: {
            origin: process.env.NODE_ENV === "development"
                ? ["http://localhost:8000", "http://localhost:9000"]
                : "https://portfolio.amirmuha.com",
            credentials: true,
        },
    });
    if (!envs_and_consts_1.__prod__) {
        app.use((0, morgan_1.default)("dev"));
    }
    app.use((0, helmet_1.default)());
    app.all("*", (_, res) => {
        if (envs_and_consts_1.__prod__) {
            res.send("Hi, How Are You?");
        }
    });
    httpServer.listen({ port: process.env.PORT }, () => {
        console.log((0, chalk_1.black)(` Server is running on http://${process.env.HOST}:${process.env.PORT} `));
    });
    process.on("unhandledRejection", (reason, promise) => {
        console.error("Unhandled Rejection at:", promise, "reason:", reason);
        process.exit();
    });
};
main().catch(console.error);
//# sourceMappingURL=index.js.map