import "reflect-metadata";
import "./src/utils/configuringEnvironmentVariables";

import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { execute, subscribe } from "graphql";

import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { MyContext } from "./src/types/MyContext";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { UploadResolver } from "./src/resolvers/Upload";
import { __prod__ } from "./src/constants/envs-and-consts";
import applyMiddlewares from "./src/middlewares/typegraphql-prisma/applyAllMiddlewares";
import { black } from "./src/chalk";
import { buildSchemaSync } from "type-graphql";
import cors from "cors";
import downloadRoute from "./src/routes/download";
import { graphqlUploadExpress } from "graphql-upload";
import helmet from "helmet";
import http from "http";
import morgan from "morgan";
import path from "path";
import prisma from "./src/prisma-client";
import { redis } from "./src/redis-client";
import redisStore from "connect-redis";
import resolvers from "./src/resolvers/allResolvers";
import session from "express-session";
import { v4 } from "uuid";

process.on("uncaughtException", (e) => {
  console.error(e);
});
const app = Express();
const RedisStore = redisStore(session);

const main = async () => {
  const httpServer = http.createServer(app);
  app.enable("trust proxy");
  app.use(
    cors({
      credentials: true,
      origin: !__prod__
        ? ["http://localhost:8000", "http://localhost:9000"]
        : ["https://portfolio.amirmuha.com"],
    })
  );

  app.use(
    session({
      name: "session_id_",
      store: new RedisStore({ client: redis }),
      secret: process.env.SESSION_SECRET!,
      genid: () => {
        return v4();
      },
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        sameSite: "none",
        secure: __prod__,
        maxAge:
          parseInt(process.env.SESSION_MAX_AGE_DAYS!) * 24 * 60 * 60 * 1000,
      },
    })
  );

  app.use(Express.static(path.join(__dirname, "./src/uploads/")));
  app.use("/download/", downloadRoute);
  applyMiddlewares();
  const schema = buildSchemaSync({
    resolvers: [...resolvers, UploadResolver] as any,
    emitSchemaFile: true,
  });
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ prisma, req, res, data: {} } as MyContext),
    plugins: [
      __prod__
        ? ApolloServerPluginLandingPageProductionDefault({
            footer: false,
          })
        : ApolloServerPluginLandingPageGraphQLPlayground(),
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

  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: server.graphqlPath,
    }
  );
  app.use(graphqlUploadExpress({}));
  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      origin: [
        "http://localhost:8000",
        "http://localhost:9000",
        "https://portfolio.amirmuha.com",
      ],
      credentials: true,
    },
  });
  if (!__prod__) {
    app.use(morgan("dev"));
  }
  app.use(helmet());
  app.all("*", (_, res) => {
    if (__prod__) {
      res.send("Hi, How Are You?");
    }
  });
  httpServer.listen({ port: process.env.PORT }, () => {
    console.log(
      black(
        ` Server is running on http://${process.env.HOST}:${process.env.PORT} `
      )
    );
  });

  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit();
  });
};

main().catch(() => {
  console.error("Something went wrong during application setup.");
  process.exit();
});
