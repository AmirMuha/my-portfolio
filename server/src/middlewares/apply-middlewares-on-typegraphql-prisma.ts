import { Authorized } from "type-graphql";
import {
  applyResolversEnhanceMap,
  ResolversEnhanceMap,
} from "../../prisma/generated/type-graphql";

export default () => {
  const resolversEnhanceMap: ResolversEnhanceMap = {
    Admin: {
      _all: [Authorized()],
    },
  };

  applyResolversEnhanceMap(resolversEnhanceMap);
};
