import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class QuestionScalarWhereWithAggregatesInput {
    AND?: QuestionScalarWhereWithAggregatesInput[] | undefined;
    OR?: QuestionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: QuestionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    question?: StringWithAggregatesFilter | undefined;
    answer_id?: StringWithAggregatesFilter | undefined;
    project_id?: StringWithAggregatesFilter | undefined;
}
