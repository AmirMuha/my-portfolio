import { AnswerUpdateOneRequiredWithoutQuestionInput } from "../inputs/AnswerUpdateOneRequiredWithoutQuestionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QuestionUpdateWithoutProjectInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    question?: StringFieldUpdateOperationsInput | undefined;
    answer?: AnswerUpdateOneRequiredWithoutQuestionInput | undefined;
}
