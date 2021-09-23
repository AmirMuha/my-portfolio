import { StringFilter } from "../inputs/StringFilter";
export declare class QuestionScalarWhereInput {
    AND?: QuestionScalarWhereInput[] | undefined;
    OR?: QuestionScalarWhereInput[] | undefined;
    NOT?: QuestionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    question?: StringFilter | undefined;
    answer_id?: StringFilter | undefined;
    project_id?: StringFilter | undefined;
}
