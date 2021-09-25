import { ValidateNested } from "class-validator";
import {
  applyArgsTypesEnhanceMap,
  ArgConfig,
  ArgsTypesEnhanceMap,
} from "../../../prisma/generated/type-graphql";
// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################
const argsTypesEnhanceMap: ArgsTypesEnhanceMap = {
  CreateAdminArgs: { fields: { data: [ValidateNested()] } },
  CreateAboutArgs: { fields: { data: [ValidateNested()] } },
  CreateMessageArgs: { fields: { data: [ValidateNested()] } },
  CreateTechArgs: { fields: { data: [ValidateNested()] } },
  CreateProjectArgs: { fields: { data: [ValidateNested()] } },
  CreateTechCategoryArgs: { fields: { data: [ValidateNested()] } },
  CreateSketchArgs: { fields: { data: [ValidateNested()] } },
  CreateQuestionArgs: { fields: { data: [ValidateNested()] } },
  CreateAnswerArgs: { fields: { data: [ValidateNested()] } },
  UpdateAdminArgs: { fields: { data: [ValidateNested()] } },
  UpdateAboutArgs: { fields: { data: [ValidateNested()] } },
  UpdateMessageArgs: { fields: { data: [ValidateNested()] } },
  UpdateTechArgs: { fields: { data: [ValidateNested()] } },
  UpdateProjectArgs: { fields: { data: [ValidateNested()] } },
  UpdateTechCategoryArgs: { fields: { data: [ValidateNested()] } },
  UpdateSketchArgs: { fields: { data: [ValidateNested()] } },
  UpdateQuestionArgs: { fields: { data: [ValidateNested()] } },
  UpdateAnswerArgs: { fields: { data: [ValidateNested()] } },
  DeleteAdminArgs: { fields: { where: [ValidateNested()] } },
  DeleteAboutArgs: { fields: { where: [ValidateNested()] } },
  DeleteMessageArgs: { fields: { where: [ValidateNested()] } },
  DeleteTechArgs: { fields: { where: [ValidateNested()] } },
  DeleteProjectArgs: { fields: { where: [ValidateNested()] } },
  DeleteTechCategoryArgs: { fields: { where: [ValidateNested()] } },
  DeleteSketchArgs: { fields: { where: [ValidateNested()] } },
  DeleteQuestionArgs: { fields: { where: [ValidateNested()] } },
  DeleteAnswerArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueAdminArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueAboutArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueMessageArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueTechArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueProjectArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueTechCategoryArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueSketchArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueQuestionArgs: { fields: { where: [ValidateNested()] } },
  FindUniqueAnswerArgs: { fields: { where: [ValidateNested()] } },
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyArgsTypesEnhanceMap(argsTypesEnhanceMap);
};
