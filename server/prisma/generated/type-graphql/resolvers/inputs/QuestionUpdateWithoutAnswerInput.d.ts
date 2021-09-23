import { ProjectUpdateOneRequiredWithoutQuestionsInput } from "../inputs/ProjectUpdateOneRequiredWithoutQuestionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QuestionUpdateWithoutAnswerInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    question?: StringFieldUpdateOperationsInput | undefined;
    project?: ProjectUpdateOneRequiredWithoutQuestionsInput | undefined;
}
