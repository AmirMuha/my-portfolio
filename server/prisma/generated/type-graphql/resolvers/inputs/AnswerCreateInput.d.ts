import { QuestionCreateNestedOneWithoutAnswerInput } from "../inputs/QuestionCreateNestedOneWithoutAnswerInput";
export declare class AnswerCreateInput {
    id?: string | undefined;
    answer: string;
    question?: QuestionCreateNestedOneWithoutAnswerInput | undefined;
}
