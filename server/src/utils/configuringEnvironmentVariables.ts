import dotenv from "dotenv";
import { resolve } from "path";
if (process.env.NODE_ENV === "development") {
  const envConfig = dotenv.config({
    path: resolve(__dirname, "../../.env." + process.env.NODE_ENV!),
  });
  if (envConfig.error) {
    process.exit();
  }

}
