import { AnswerUpdateOneRequiredWithoutQuestionInput } from "../inputs/AnswerUpdateOneRequiredWithoutQuestionInput";
import { ProjectUpdateOneRequiredWithoutQuestionsInput } from "../inputs/ProjectUpdateOneRequiredWithoutQuestionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QuestionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    question?: StringFieldUpdateOperationsInput | undefined;
    answer?: AnswerUpdateOneRequiredWithoutQuestionInput | undefined;
    project?: ProjectUpdateOneRequiredWithoutQuestionsInput | undefined;
}
