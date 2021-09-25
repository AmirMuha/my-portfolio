import { IsString } from "class-validator";
import { UseMiddleware } from "type-graphql";
import {
  ModelConfig,
  ModelsEnhanceMap,
  applyModelsEnhanceMap,
} from "../../../prisma/generated/type-graphql";
import { isLoggedIn } from "../isLoggedIn";
import { adminPropsValidation } from "../validations";

// ##############################################
// ####################### CONFIGURATION ########
// ##############################################
const projectModelConfig: ModelConfig<"Project"> = {};
const aboutModelConfig: ModelConfig<"About"> = {
  fields: {
    _all: [UseMiddleware(isLoggedIn)],
    title: [IsString()],
    body: [IsString()],
    admin_id: [IsString()],
  },
};
const adminModelConfig: ModelConfig<"Admin"> = {
  fields: {
    ...adminPropsValidation,
  },
};
// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################
const modelsEnhanceMap: ModelsEnhanceMap = {
  Project: projectModelConfig,
  About: aboutModelConfig,
  Admin: adminModelConfig,
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyModelsEnhanceMap(modelsEnhanceMap);
};
