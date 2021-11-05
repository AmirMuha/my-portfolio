import { config as EnvConfig } from "dotenv";
EnvConfig({
  path: `.env.${process.env.NODE_ENV}`,
});
