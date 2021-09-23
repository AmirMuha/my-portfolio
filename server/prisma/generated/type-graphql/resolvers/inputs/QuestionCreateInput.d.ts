import { AnswerCreateNestedOneWithoutQuestionInput } from "../inputs/AnswerCreateNestedOneWithoutQuestionInput";
import { ProjectCreateNestedOneWithoutQuestionsInput } from "../inputs/ProjectCreateNestedOneWithoutQuestionsInput";
export declare class QuestionCreateInput {
    id?: string | undefined;
    question: string;
    answer: AnswerCreateNestedOneWithoutQuestionInput;
    project: ProjectCreateNestedOneWithoutQuestionsInput;
}
