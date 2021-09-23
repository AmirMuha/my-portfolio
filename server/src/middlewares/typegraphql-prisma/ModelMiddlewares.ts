import {
  ModelConfig,
  ModelsEnhanceMap,
  applyModelsEnhanceMap,
} from "../../../prisma/generated/type-graphql";
import { adminPropsValidation } from "../validations";

// ##############################################
// ####################### CONFIGURATION ########
// ##############################################
const projectModelConfig: ModelConfig<"Project"> = {};
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
  Admin: adminModelConfig,
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyModelsEnhanceMap(modelsEnhanceMap);
};
