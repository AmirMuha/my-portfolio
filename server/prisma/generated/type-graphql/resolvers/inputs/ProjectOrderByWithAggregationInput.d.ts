import { ProjectCountOrderByAggregateInput } from "../inputs/ProjectCountOrderByAggregateInput";
import { ProjectMaxOrderByAggregateInput } from "../inputs/ProjectMaxOrderByAggregateInput";
import { ProjectMinOrderByAggregateInput } from "../inputs/ProjectMinOrderByAggregateInput";
export declare class ProjectOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    github_url?: "asc" | "desc" | undefined;
    app_url?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    admin_id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ProjectCountOrderByAggregateInput | undefined;
    _max?: ProjectMaxOrderByAggregateInput | undefined;
    _min?: ProjectMinOrderByAggregateInput | undefined;
}
