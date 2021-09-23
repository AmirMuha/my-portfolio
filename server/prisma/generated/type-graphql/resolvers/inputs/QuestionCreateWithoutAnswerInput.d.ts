import { ProjectCreateNestedOneWithoutQuestionsInput } from "../inputs/ProjectCreateNestedOneWithoutQuestionsInput";
export declare class QuestionCreateWithoutAnswerInput {
    id?: string | undefined;
    question: string;
    project: ProjectCreateNestedOneWithoutQuestionsInput;
}
