import { QuestionRelationFilter } from "../inputs/QuestionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AnswerWhereInput {
    AND?: AnswerWhereInput[] | undefined;
    OR?: AnswerWhereInput[] | undefined;
    NOT?: AnswerWhereInput[] | undefined;
    id?: StringFilter | undefined;
    answer?: StringFilter | undefined;
    question?: QuestionRelationFilter | undefined;
}
