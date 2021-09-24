import { ValidateNested } from "class-validator";
import {
  applyArgsTypesEnhanceMap,
  ArgConfig,
  ArgsTypesEnhanceMap,
} from "../../../prisma/generated/type-graphql";

// ##############################################
// ####################### CONFIGURATION ########
// ##############################################
const adminCreateArgConfig: ArgConfig<"CreateAdminArgs"> = {
  fields: {
    data: [ValidateNested()],
  },
};
// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################
const argsTypesEnhanceMap: ArgsTypesEnhanceMap = {
  CreateAdminArgs: adminCreateArgConfig,
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyArgsTypesEnhanceMap(argsTypesEnhanceMap);
};
