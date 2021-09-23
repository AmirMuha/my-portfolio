import { QuestionOrderByWithAggregationInput } from "../../../inputs/QuestionOrderByWithAggregationInput";
import { QuestionScalarWhereWithAggregatesInput } from "../../../inputs/QuestionScalarWhereWithAggregatesInput";
import { QuestionWhereInput } from "../../../inputs/QuestionWhereInput";
export declare class GroupByQuestionArgs {
    where?: QuestionWhereInput | undefined;
    orderBy?: QuestionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "question" | "answer_id" | "project_id">;
    having?: QuestionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
