import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import { config as EnvConfig } from "dotenv";
import Express from "express";
import path from "path";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { resolvers } from "./prisma/generated/type-graphql";
import { black } from "./src/chalk";
import { HOST, PORT, __prod__ } from "./src/constants/environment-variables";
import prisma from "./src/prisma-client";
import morgan from "morgan";
import helmet from "helmet";
import applyMiddlewares from "./src/middlewares/apply-middlewares-on-typegraphql-prisma";
import { MyContext } from "./src/types/MyContext";
const app = Express();

app.use(
  cors({
    credentials: true,
    origin: "localhost:8000",
  })
);
EnvConfig({
  path: "./.env*",
});

const main = async () => {
  applyMiddlewares();
  const schema = buildSchemaSync({
    resolvers: [...resolvers],
    authChecker: async ({ context: { req } }: { context: MyContext }) => {
      console.log(req.headers.authorization);
      return true;
    },
    emitSchemaFile: true,
  });
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ prisma, req }),
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
main();
