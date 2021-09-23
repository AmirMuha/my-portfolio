import { QuestionOrderByWithRelationInput } from "../inputs/QuestionOrderByWithRelationInput";
export declare class AnswerOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    answer?: "asc" | "desc" | undefined;
    question?: QuestionOrderByWithRelationInput | undefined;
}
