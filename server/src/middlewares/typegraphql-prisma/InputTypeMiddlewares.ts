import {
  applyInputTypesEnhanceMap,
  InputTypeConfig,
  InputTypesEnhanceMap,
} from "../../../prisma/generated/type-graphql";
import { adminPropsValidation } from "../validations";

// ##############################################
// ####################### CONFIGURATION ########
// ##############################################

const adminCreateInputTypeConfig: InputTypeConfig<"AdminCreateInput"> = {
  fields: { ...adminPropsValidation },
};
// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################
const inputTypesEnhanceMap: InputTypesEnhanceMap = {
  AdminCreateInput: adminCreateInputTypeConfig,
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyInputTypesEnhanceMap(inputTypesEnhanceMap);
};
