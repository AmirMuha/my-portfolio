import { config as EnvConfig } from "dotenv";
EnvConfig({
  path: `.env.${process.env.NODE_ENV}`,
});
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import redisStore from "connect-redis";
import cors from "cors";
import Express from "express";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { v4 } from "uuid";
import resolvers from "./src/resolvers/allResolvers";
import { black } from "./src/chalk";
// import { TechCategoryResolver } from "./prisma/generated/type-graphql";
import {
  HOST,
  PORT,
  SESSION_MAX_AGE,
  SESSION_SECRET,
  __prod__,
} from "./src/constants/envs-and-consts";
import applyMiddlewares from "./src/middlewares/typegraphql-prisma/applyAllMiddlewares";
import prisma from "./src/prisma-client";
import { redis } from "./src/redis-client";

import { MyContext } from "./src/types/MyContext";
const app = Express();
const RedisStore = redisStore(session);

const main = async () => {
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
  applyMiddlewares();
  const schema = buildSchemaSync({
    resolvers,
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
    ],
  });
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
  app.listen({ port: PORT }, () => {
    console.log(black(` Server is running on http://${HOST}:${PORT} `));
  });
};
main().catch(console.error);
