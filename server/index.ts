import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import { config as EnvConfig } from "dotenv";
import Express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { AdminCrudResolver } from "./src/resolvers/User";
import { AuthResolver } from "./src/resolvers/Auth";
import {
  AboutCrudResolver,
  ProjectCrudResolver,
  MessageCrudResolver,
  SketchCrudResolver,
  QuestionCrudResolver,
} from "./prisma/generated/type-graphql";
import { black } from "./src/chalk";
import {
  HOST,
  PORT,
  SESSION_MAX_AGE,
  SESSION_SECRET,
  __prod__,
} from "./src/constants/environment-variables";
import applyMiddlewares from "./src/middlewares/typegraphql-prisma/applyAllMiddlewares";
import prisma from "./src/prisma-client";
import { MyContext } from "./src/types/MyContext";
import session from "express-session";
import { redis } from "./src/redis-client";
import { v4 } from "uuid";
import redisStore from "connect-redis";
const app = Express();
const RedisStore = redisStore(session);

app.use(
  cors({
    credentials: true,
    origin: "localhost:8000",
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

EnvConfig({
  path: "./.env*",
});

const main = async () => {
  applyMiddlewares();
  const schema = buildSchemaSync({
    resolvers: [
      AboutCrudResolver,
      ProjectCrudResolver,
      MessageCrudResolver,
      SketchCrudResolver,
      QuestionCrudResolver,
      AdminCrudResolver,
      AuthResolver,
    ],
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
  server.applyMiddleware({ app });
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
