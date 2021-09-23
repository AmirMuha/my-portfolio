import { TechCategoryCountOrderByAggregateInput } from "../inputs/TechCategoryCountOrderByAggregateInput";
import { TechCategoryMaxOrderByAggregateInput } from "../inputs/TechCategoryMaxOrderByAggregateInput";
import { TechCategoryMinOrderByAggregateInput } from "../inputs/TechCategoryMinOrderByAggregateInput";
export declare class TechCategoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    project_id?: "asc" | "desc" | undefined;
    _count?: TechCategoryCountOrderByAggregateInput | undefined;
    _max?: TechCategoryMaxOrderByAggregateInput | undefined;
    _min?: TechCategoryMinOrderByAggregateInput | undefined;
}
