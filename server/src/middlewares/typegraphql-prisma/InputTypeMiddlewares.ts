import {
  applyInputTypesEnhanceMap,
  InputTypeConfig,
  InputTypesEnhanceMap,
} from "../../../prisma/generated/type-graphql";
import {
  aboutPropsValidation,
  adminPropsValidation,
  answerPropsValidation,
  messagePropsValidation,
  projectPropsValidation,
  questionPropsValidation,
  sketchPropsValidation,
  techCategoryPropsValidation,
  techPropsValidation,
} from "../validations";

// ##############################################
// ####################### CONFIGURATION ########
// ##############################################

const adminCreateInputTypeConfig: InputTypeConfig<"AdminCreateInput"> = {
  fields: { ...adminPropsValidation },
};
const aboutCreateInputTypeConfig: InputTypeConfig<"AboutCreateInput"> = {
  fields: { ...aboutPropsValidation },
};
const aboutUpdateInputTypeConfig: InputTypeConfig<"AboutUpdateInput"> = {
  fields: { ...aboutPropsValidation },
};
const techUpdateInputTypeConfig: InputTypeConfig<"TechUpdateInput"> = {
  fields: { ...techPropsValidation },
};
const techCreateInputTypeConfig: InputTypeConfig<"TechCreateInput"> = {
  fields: { ...techPropsValidation },
};
const techCategoryUpdateInputTypeConfig: InputTypeConfig<"TechCategoryUpdateInput"> =
  {
    fields: { ...techCategoryPropsValidation },
  };
const techCategoryCreateInputTypeConfig: InputTypeConfig<"TechCategoryCreateInput"> =
  {
    fields: { ...techCategoryPropsValidation },
  };
const questionUpdateInputTypeConfig: InputTypeConfig<"QuestionUpdateInput"> = {
  fields: { ...questionPropsValidation },
};
const questionCreateInputTypeConfig: InputTypeConfig<"QuestionCreateInput"> = {
  fields: { ...questionPropsValidation },
};
const answerUpdateInputTypeConfig: InputTypeConfig<"AnswerUpdateInput"> = {
  fields: { ...answerPropsValidation },
};
const answerCreateInputTypeConfig: InputTypeConfig<"AnswerCreateInput"> = {
  fields: { ...answerPropsValidation },
};
const sketchUpdateInputTypeConfig: InputTypeConfig<"SketchUpdateInput"> = {
  fields: { ...sketchPropsValidation },
};
const sketchCreateInputTypeConfig: InputTypeConfig<"SketchCreateInput"> = {
  fields: { ...sketchPropsValidation },
};
const projectUpdateInputTypeConfig: InputTypeConfig<"ProjectUpdateInput"> = {
  fields: { ...projectPropsValidation },
};
const projectCreateInputTypeConfig: InputTypeConfig<"ProjectCreateInput"> = {
  fields: { ...projectPropsValidation },
};
const messageUpdateInputTypeConfig: InputTypeConfig<"MessageUpdateInput"> = {
  fields: { ...messagePropsValidation },
};
const messageCreateInputTypeConfig: InputTypeConfig<"MessageCreateInput"> = {
  fields: { ...messagePropsValidation },
};
// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################
const inputTypesEnhanceMap: InputTypesEnhanceMap = {
  AdminCreateInput: adminCreateInputTypeConfig,
  AboutCreateInput: aboutCreateInputTypeConfig,
  AboutUpdateInput: aboutUpdateInputTypeConfig,
  TechCreateInput: techCreateInputTypeConfig,
  TechUpdateInput: techUpdateInputTypeConfig,
  TechCategoryCreateInput: techCategoryCreateInputTypeConfig,
  TechCategoryUpdateInput: techCategoryUpdateInputTypeConfig,
  QuestionCreateInput: questionCreateInputTypeConfig,
  QuestionUpdateInput: questionUpdateInputTypeConfig,
  AnswerCreateInput: answerCreateInputTypeConfig,
  AnswerUpdateInput: answerUpdateInputTypeConfig,
  SketchCreateInput: sketchCreateInputTypeConfig,
  SketchUpdateInput: sketchUpdateInputTypeConfig,
  ProjectCreateInput: projectCreateInputTypeConfig,
  ProjectUpdateInput: projectUpdateInputTypeConfig,
  MessageCreateInput: messageCreateInputTypeConfig,
  MessageUpdateInput: messageUpdateInputTypeConfig,
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyInputTypesEnhanceMap(inputTypesEnhanceMap);
};
