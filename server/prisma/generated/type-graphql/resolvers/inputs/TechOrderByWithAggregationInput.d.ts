import { TechCountOrderByAggregateInput } from "../inputs/TechCountOrderByAggregateInput";
import { TechMaxOrderByAggregateInput } from "../inputs/TechMaxOrderByAggregateInput";
import { TechMinOrderByAggregateInput } from "../inputs/TechMinOrderByAggregateInput";
export declare class TechOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tech_category_id?: "asc" | "desc" | undefined;
    _count?: TechCountOrderByAggregateInput | undefined;
    _max?: TechMaxOrderByAggregateInput | undefined;
    _min?: TechMinOrderByAggregateInput | undefined;
}
