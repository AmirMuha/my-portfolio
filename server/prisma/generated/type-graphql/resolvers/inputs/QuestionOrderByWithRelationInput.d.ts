import { AnswerOrderByWithRelationInput } from "../inputs/AnswerOrderByWithRelationInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
export declare class QuestionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    question?: "asc" | "desc" | undefined;
    answer?: AnswerOrderByWithRelationInput | undefined;
    answer_id?: "asc" | "desc" | undefined;
    project?: ProjectOrderByWithRelationInput | undefined;
    project_id?: "asc" | "desc" | undefined;
}
