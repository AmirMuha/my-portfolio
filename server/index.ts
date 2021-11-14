import "reflect-metadata";
import "./src/utils/configuringEnvironmentVariables";

import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import {
  HOST,
  PORT,
  SESSION_MAX_AGE,
  SESSION_SECRET,
  __prod__,
} from "./src/constants/envs-and-consts";
import { execute, subscribe } from "graphql";

import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { MyContext } from "./src/types/MyContext";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { UploadResolver } from "./src/resolvers/Upload";
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
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:8000",
    })
  );
  app.use(
    session({
      name: "sid",
      store: new RedisStore({ client: redis }),
      secret: SESSION_SECRET,
      genid: () => {
        return v4();
      },
      resave: true,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: __prod__,
        maxAge: SESSION_MAX_AGE,
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
    cors: { origin: "http://localhost:8000", credentials: true },
  });
  if (!__prod__) {
    app.use(morgan("dev"));
  }
  app.use(helmet());
  app.all("*", (_, res) => {
    if (__prod__) {
      res.sendFile(path.join(__dirname, "/dist/index.html"));
    } else {
      res.send("Hi, How Are You?");
    }
    res.end();
  });
  httpServer.listen({ port: PORT }, () => {
    console.log(black(` Server is running on http://${HOST}:${PORT} `));
  });

  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit();
  });
};
main().catch(console.error);
