import {
  applyResolversEnhanceMap,
  ResolverActionsConfig,
  ResolversEnhanceMap,
} from "../../../prisma/generated/type-graphql";

// ##############################################
// ####################### CONFIGURATION ########
// ##############################################
const adminResolverActionConfig: ResolverActionsConfig<"Admin"> = {};
// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################
const resolversEnhanceMap: ResolversEnhanceMap = {
  Admin: adminResolverActionConfig,
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyResolversEnhanceMap(resolversEnhanceMap);
};
