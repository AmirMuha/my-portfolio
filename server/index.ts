import "reflect-metadata";
import "./src/setup/envVar.setup";
import {
  EntityRepository,
  EntityManager,
  MikroORM,
  RequestContext,
} from "@mikro-orm/core";
import MikroORM_options from "./mikro-orm.config";
import debug from "debug";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { execute, subscribe } from "graphql";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { MyContext } from "./src/types/myContext.type";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { __prod__ } from "./src/constants/envs-and-consts";
import { buildSchemaSync } from "type-graphql";
import cors from "cors";
import downloadRoute from "./src/apis/download.api";
import { graphqlUploadExpress } from "graphql-upload";
import helmet from "helmet";
import http from "http";
import morgan from "morgan";
import path from "path";
import ConnectPgSimple from "connect-pg-simple";
import resolvers from "./src/resolvers/all.resolver";
import session from "express-session";
import { v4 } from "uuid";
import { setupMikroORM } from "./src/setup/mikroORM.setup";
const d_server = debug("app:init:server");
const d_db = debug("app:init:mikroORM");
const d_uncaughtException = debug("app:uncaughtException");
const d_unhandledRejection = debug("app:unhandledRejection");

process.on("uncaughtException", (e) => {
  d_uncaughtException(e);
});
const app = Express();
const PgStore = ConnectPgSimple(session);

const main = async () => {
  const ORM = await setupMikroORM()
    .then((orm) => {
      d_db("Connected to the database successfully.");
      return orm;
    })
    .catch((e) => {
      d_db(e);
    });

  const httpServer = http.createServer(app);

  app.use(
    cors({
      credentials: true,
      origin:
        process.env.NODE_ENV === "development"
          ? ["http://localhost:8000", "http://localhost:9000"]
          : "https://portfolio.amirmuha.com",
    })
  );
  app.use(
    session({
      name: "sid",
      store: new PgStore({
        createTableIfMissing: true,
        conString: process.env.DATABASE_URL!,
      }),
      secret: process.env.SESSION_SECRET!,
      genid: () => {
        return v4();
      },
      resave: true,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: __prod__,
        maxAge:
          parseInt(process.env.SESSION_MAX_AGE_DAYS!) * 24 * 60 * 60 * 1000,
      },
    })
  );

  app.use(Express.static(path.join(__dirname, "./src/uploads/")));
  app.use("/download/", downloadRoute);

  const schema = buildSchemaSync({
    resolvers: [...resolvers] as any,
    emitSchemaFile: true,
  });
  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) =>
      ({ req, res, data: {}, ORM } as MyContext),
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
      origin:
        process.env.NODE_ENV === "development"
          ? ["http://localhost:8000", "http://localhost:9000"]
          : "https://portfolio.amirmuha.com",
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
    d_server(
      ` Server is running on http://${process.env.HOST}:${process.env.PORT} `
    );
  });

  process.on("unhandledRejection", (reason, promise) => {
    d_unhandledRejection("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit();
  });
};

main().catch(console.error);
