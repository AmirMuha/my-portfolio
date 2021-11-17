import {__prod__} from "../constants/envs-and-consts"
if(!__prod__) {
  import("dotenv").then((EnvConfig) => {
    EnvConfig.config({
      path: `.env.${process.env.NODE_ENV}`,
    });
  })
}
