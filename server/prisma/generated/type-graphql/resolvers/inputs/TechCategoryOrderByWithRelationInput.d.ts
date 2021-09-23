import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { TechOrderByRelationAggregateInput } from "../inputs/TechOrderByRelationAggregateInput";
export declare class TechCategoryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    techs?: TechOrderByRelationAggregateInput | undefined;
    project?: ProjectOrderByWithRelationInput | undefined;
    project_id?: "asc" | "desc" | undefined;
}
