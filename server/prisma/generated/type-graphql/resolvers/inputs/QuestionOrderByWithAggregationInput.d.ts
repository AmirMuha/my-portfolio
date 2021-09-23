import { QuestionCountOrderByAggregateInput } from "../inputs/QuestionCountOrderByAggregateInput";
import { QuestionMaxOrderByAggregateInput } from "../inputs/QuestionMaxOrderByAggregateInput";
import { QuestionMinOrderByAggregateInput } from "../inputs/QuestionMinOrderByAggregateInput";
export declare class QuestionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    question?: "asc" | "desc" | undefined;
    answer_id?: "asc" | "desc" | undefined;
    project_id?: "asc" | "desc" | undefined;
    _count?: QuestionCountOrderByAggregateInput | undefined;
    _max?: QuestionMaxOrderByAggregateInput | undefined;
    _min?: QuestionMinOrderByAggregateInput | undefined;
}
