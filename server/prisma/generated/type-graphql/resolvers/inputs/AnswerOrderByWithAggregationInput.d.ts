import { AnswerCountOrderByAggregateInput } from "../inputs/AnswerCountOrderByAggregateInput";
import { AnswerMaxOrderByAggregateInput } from "../inputs/AnswerMaxOrderByAggregateInput";
import { AnswerMinOrderByAggregateInput } from "../inputs/AnswerMinOrderByAggregateInput";
export declare class AnswerOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    answer?: "asc" | "desc" | undefined;
    _count?: AnswerCountOrderByAggregateInput | undefined;
    _max?: AnswerMaxOrderByAggregateInput | undefined;
    _min?: AnswerMinOrderByAggregateInput | undefined;
}
