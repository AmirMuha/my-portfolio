import { QuestionUpdateOneWithoutAnswerInput } from "../inputs/QuestionUpdateOneWithoutAnswerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AnswerUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    answer?: StringFieldUpdateOperationsInput | undefined;
    question?: QuestionUpdateOneWithoutAnswerInput | undefined;
}
