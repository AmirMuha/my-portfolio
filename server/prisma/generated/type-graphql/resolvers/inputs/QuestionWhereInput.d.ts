import { AnswerRelationFilter } from "../inputs/AnswerRelationFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QuestionWhereInput {
    AND?: QuestionWhereInput[] | undefined;
    OR?: QuestionWhereInput[] | undefined;
    NOT?: QuestionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    question?: StringFilter | undefined;
    answer?: AnswerRelationFilter | undefined;
    answer_id?: StringFilter | undefined;
    project?: ProjectRelationFilter | undefined;
    project_id?: StringFilter | undefined;
}
