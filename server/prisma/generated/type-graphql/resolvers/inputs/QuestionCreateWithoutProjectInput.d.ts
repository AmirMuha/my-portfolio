import { AnswerCreateNestedOneWithoutQuestionInput } from "../inputs/AnswerCreateNestedOneWithoutQuestionInput";
export declare class QuestionCreateWithoutProjectInput {
    id?: string | undefined;
    question: string;
    answer: AnswerCreateNestedOneWithoutQuestionInput;
}
