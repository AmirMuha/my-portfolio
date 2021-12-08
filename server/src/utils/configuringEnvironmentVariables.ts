import dotenv from "dotenv";
import fs from "fs";
import { resolve } from "path";

let envPath:string = ""
if(process.env.NODE_ENV === "production") {
  envPath = resolve(__dirname, "../../../.env.production")
} else if (process.env.NODE_ENV === 'development'){
  envPath = resolve(__dirname, "../../.env.production")
} else {
  throw new Error("Please specify the environment you're working in.")
}
const isEnvExist = fs.existsSync(envPath)
if (process.env.NODE_ENV === "development" || (process.env.NODE_ENV! === "production" && isEnvExist)) {
  const envConfig = dotenv.config({
    path: envPath,
  });
  if (envConfig.error) {
    process.exit();
  }
}
