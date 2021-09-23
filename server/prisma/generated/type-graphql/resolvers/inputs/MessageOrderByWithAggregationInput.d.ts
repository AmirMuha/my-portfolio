import { MessageCountOrderByAggregateInput } from "../inputs/MessageCountOrderByAggregateInput";
import { MessageMaxOrderByAggregateInput } from "../inputs/MessageMaxOrderByAggregateInput";
import { MessageMinOrderByAggregateInput } from "../inputs/MessageMinOrderByAggregateInput";
export declare class MessageOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    from?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    read_status?: "asc" | "desc" | undefined;
    answer_status?: "asc" | "desc" | undefined;
    admin_id?: "asc" | "desc" | undefined;
    createdAd?: "asc" | "desc" | undefined;
    _count?: MessageCountOrderByAggregateInput | undefined;
    _max?: MessageMaxOrderByAggregateInput | undefined;
    _min?: MessageMinOrderByAggregateInput | undefined;
}
