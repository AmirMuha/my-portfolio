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
    updateAbout: [UseMiddleware(isLoggedIn, Update)],
    createAbout: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
    deleteAbout: [UseMiddleware(isLoggedIn)],
    deleteManyAbout: [UseMiddleware(isLoggedIn)],
  },
  Tech: {
    updateTech: [UseMiddleware(isLoggedIn, Update)],
    createTech: [UseMiddleware(isLoggedIn)],
    deleteTech: [UseMiddleware(isLoggedIn)],
    deleteManyTech: [UseMiddleware(isLoggedIn)],
  },
  TechCategory: {
    updateTechCategory: [UseMiddleware(isLoggedIn, Update)],
    createTechCategory: [UseMiddleware(isLoggedIn)],
    deleteTechCategory: [UseMiddleware(isLoggedIn)],
    deleteManyTechCategory: [UseMiddleware(isLoggedIn)],
  },
  Project: {
    updateProject: [UseMiddleware(isLoggedIn, Update)],
    createProject: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
    deleteProject: [UseMiddleware(isLoggedIn)],
    deleteManyProject: [UseMiddleware(isLoggedIn)],
  },
  Message: {
    updateMessage: [UseMiddleware(isLoggedIn, Update)],
    createMessage: [UseMiddleware(isLoggedIn, ConnectToAdmin)],
    deleteMessage: [UseMiddleware(isLoggedIn)],
    deleteManyMessage: [UseMiddleware(isLoggedIn)],
  },
  Answer: {
    updateAnswer: [UseMiddleware(isLoggedIn, Update)],
    createAnswer: [UseMiddleware(isLoggedIn)],
    deleteAnswer: [UseMiddleware(isLoggedIn)],
    deleteManyAnswer: [UseMiddleware(isLoggedIn)],
  },
  Question: {
    updateQuestion: [UseMiddleware(isLoggedIn, Update)],
    createQuestion: [UseMiddleware(isLoggedIn)],
    deleteQuestion: [UseMiddleware(isLoggedIn)],
    deleteManyQuestion: [UseMiddleware(isLoggedIn)],
  },
  Sketch: {
    updateSketch: [UseMiddleware(isLoggedIn, Update)],
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
