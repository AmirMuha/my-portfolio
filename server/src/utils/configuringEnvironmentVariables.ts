import { join, resolve } from "path";

import dotenv from "dotenv";
import fs from "fs"
const isEnvExist = fs.existsSync(join(__dirname,"../../.env.production"))
if (process.env.NODE_ENV === "development" || (process.env.NODE_ENV! === "production" && isEnvExist)) {
  const envConfig = dotenv.config({
    path: resolve(__dirname, "../../.env." + process.env.NODE_ENV!),
  });
  if (envConfig.error) {
    process.exit();
  }
}
