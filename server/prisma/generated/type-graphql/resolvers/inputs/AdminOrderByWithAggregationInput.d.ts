import { AdminCountOrderByAggregateInput } from "../inputs/AdminCountOrderByAggregateInput";
import { AdminMaxOrderByAggregateInput } from "../inputs/AdminMaxOrderByAggregateInput";
import { AdminMinOrderByAggregateInput } from "../inputs/AdminMinOrderByAggregateInput";
export declare class AdminOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    fname?: "asc" | "desc" | undefined;
    lname?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: AdminCountOrderByAggregateInput | undefined;
    _max?: AdminMaxOrderByAggregateInput | undefined;
    _min?: AdminMinOrderByAggregateInput | undefined;
}
