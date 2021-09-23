import { AboutCountOrderByAggregateInput } from "../inputs/AboutCountOrderByAggregateInput";
import { AboutMaxOrderByAggregateInput } from "../inputs/AboutMaxOrderByAggregateInput";
import { AboutMinOrderByAggregateInput } from "../inputs/AboutMinOrderByAggregateInput";
export declare class AboutOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    admin_id?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: AboutCountOrderByAggregateInput | undefined;
    _max?: AboutMaxOrderByAggregateInput | undefined;
    _min?: AboutMinOrderByAggregateInput | undefined;
}
