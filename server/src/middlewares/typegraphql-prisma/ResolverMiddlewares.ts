import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "../../../prisma/generated/type-graphql";

import { ConnectToAdmin } from "../ConnectToAdmin";
import { UseMiddleware } from "type-graphql";
import { isLoggedIn } from "../isLoggedIn";

// import { Update } from "../Update";

// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################

const resolversEnhanceMap: ResolversEnhanceMap = {
  About: {
    updateAbout: [UseMiddleware(isLoggedIn)],
    createAbout: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
    deleteAbout: [UseMiddleware(isLoggedIn)],
    deleteManyAbout: [UseMiddleware(isLoggedIn)],
  },
  Tech: {
    updateTech: [UseMiddleware(isLoggedIn)],
    createTech: [UseMiddleware(isLoggedIn)],
    deleteTech: [UseMiddleware(isLoggedIn)],
    deleteManyTech: [UseMiddleware(isLoggedIn)],
  },
  TechCategory: {
    updateTechCategory: [UseMiddleware(isLoggedIn)],
    createTechCategory: [UseMiddleware(isLoggedIn)],
    deleteTechCategory: [UseMiddleware(isLoggedIn)],
    deleteManyTechCategory: [UseMiddleware(isLoggedIn)],
  },
  Project: {
    updateProject: [UseMiddleware(isLoggedIn)],
    createProject: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
    deleteProject: [UseMiddleware(isLoggedIn)],
    deleteManyProject: [UseMiddleware(isLoggedIn)],
  },
  Message: {
    updateMessage: [UseMiddleware(isLoggedIn)],
    createMessage: [UseMiddleware()],
    deleteMessage: [UseMiddleware(isLoggedIn)],
    deleteManyMessage: [UseMiddleware(isLoggedIn)],
  },
  Question: {
    updateQuestion: [UseMiddleware(isLoggedIn)],
    createQuestion: [UseMiddleware(isLoggedIn)],
    deleteQuestion: [UseMiddleware(isLoggedIn)],
    deleteManyQuestion: [UseMiddleware(isLoggedIn)],
  },
  Sketch: {
    updateSketch: [UseMiddleware(isLoggedIn)],
    createSketch: [UseMiddleware(isLoggedIn)],
    deleteSketch: [UseMiddleware(isLoggedIn)],
    deleteManySketch: [UseMiddleware(isLoggedIn)],
  },
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyResolversEnhanceMap(resolversEnhanceMap);
};
