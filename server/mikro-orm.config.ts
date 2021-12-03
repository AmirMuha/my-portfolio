import { MikroORM } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import path from "path";
import { __prod__ } from "./src/constants/envs-and-consts";
export default {
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.(js|ts)$/,
    disableForeignKeys: __prod__, // important in production
  },
  debug: !__prod__,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  dbName: process.env.DATABASE_DBNAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  entities: ["dist/src/entities/**/*.js"],
  entitiesTs: ["src/entities/**/*.ts"],
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
