import { UseMiddleware } from "type-graphql";
import {
  applyResolversEnhanceMap,
  ResolversEnhanceMap,
} from "../../../prisma/generated/type-graphql";
import { ConnectToAdmin } from "../ConnectToAdmin";
import { isLoggedIn } from "../isLoggedIn";
import { Update } from "../Update";

// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################

const resolversEnhanceMap: ResolversEnhanceMap = {
  About: {
    _all: [UseMiddleware(isLoggedIn)],
    updateAbout: [UseMiddleware(isLoggedIn, Update)],
    createAbout: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
  },
  Tech: {
    _all: [UseMiddleware(isLoggedIn)],
    updateTech: [UseMiddleware(isLoggedIn, Update)],
    createTech: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
  },
  TechCategory: {
    _all: [UseMiddleware(isLoggedIn)],
    updateTechCategory: [UseMiddleware(isLoggedIn, Update)],
    createTechCategory: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
  },
  Project: {
    _all: [UseMiddleware(isLoggedIn)],
    updateProject: [UseMiddleware(isLoggedIn, Update)],
    createProject: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
  },
  Message: {
    _all: [UseMiddleware(isLoggedIn)],
    updateMessage: [UseMiddleware(isLoggedIn, Update)],
    createMessage: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
  },
  Answer: {
    _all: [UseMiddleware(isLoggedIn)],
    updateAnswer: [UseMiddleware(isLoggedIn, Update)],
    createAnswer: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
  },
  Question: {
    _all: [UseMiddleware(isLoggedIn)],
    updateQuestion: [UseMiddleware(isLoggedIn, Update)],
    createQuestion: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
  },
  Sketch: {
    _all: [UseMiddleware(isLoggedIn)],
    updateSketch: [UseMiddleware(isLoggedIn, Update)],
    createSketch: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
  },
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyResolversEnhanceMap(resolversEnhanceMap);
};
