import {
  applyModelsEnhanceMap,
  ModelConfig,
  ModelsEnhanceMap,
} from "../../../prisma/generated/type-graphql";
import { aboutPropsValidation, adminPropsValidation } from "../validations";

// ##############################################
// ####################### CONFIGURATION ########
// ##############################################
const projectModelConfig: ModelConfig<"Project"> = {};
const aboutModelConfig: ModelConfig<"About"> = {
  fields: {
    ...aboutPropsValidation,
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
