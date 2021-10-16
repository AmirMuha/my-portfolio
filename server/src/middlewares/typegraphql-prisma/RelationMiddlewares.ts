import { UseMiddleware } from "type-graphql";
import {
  applyRelationResolversEnhanceMap,
  RelationResolverActionsConfig,
  RelationResolversEnhanceMap,
} from "../../../prisma/generated/type-graphql";
import CountAdmins from "../CountAdmins";
import { isLoggedIn } from "../isLoggedIn";
import { NotAllowedToCreateAdmin } from "../NotAllowedToCreateAdmin";
// ##############################################
// ####################### CONFIGURATION ########
// ##############################################
const adminRelationResolverActionsConfig: RelationResolverActionsConfig<"Admin"> =
  {};
const aboutRelationResolverActionsConfig: RelationResolverActionsConfig<"About"> =
  {
    admin: [
      UseMiddleware(isLoggedIn),
      UseMiddleware(CountAdmins),
      UseMiddleware(NotAllowedToCreateAdmin),
    ],
  };
const projectRelationResolverActionsConfig: RelationResolverActionsConfig<"Project"> =
  {
    admin: [
      UseMiddleware(isLoggedIn),
      UseMiddleware(CountAdmins),
      UseMiddleware(NotAllowedToCreateAdmin),
    ],
  };
const messageRelationResolverActionsConfig: RelationResolverActionsConfig<"Message"> =
  {
    admin: [
      UseMiddleware(isLoggedIn),
      UseMiddleware(CountAdmins),
      UseMiddleware(NotAllowedToCreateAdmin),
    ],
  };
// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################
const relationResolversEnhanceMap: RelationResolversEnhanceMap = {
  Admin: adminRelationResolverActionsConfig,
  About: aboutRelationResolverActionsConfig,
  Message: messageRelationResolverActionsConfig,
  Project: projectRelationResolverActionsConfig,
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyRelationResolversEnhanceMap(relationResolversEnhanceMap);
};
