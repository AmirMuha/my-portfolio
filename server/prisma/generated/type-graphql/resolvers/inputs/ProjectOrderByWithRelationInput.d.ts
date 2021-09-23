import { AdminOrderByWithRelationInput } from "../inputs/AdminOrderByWithRelationInput";
import { QuestionOrderByRelationAggregateInput } from "../inputs/QuestionOrderByRelationAggregateInput";
import { SketchOrderByRelationAggregateInput } from "../inputs/SketchOrderByRelationAggregateInput";
import { TechCategoryOrderByRelationAggregateInput } from "../inputs/TechCategoryOrderByRelationAggregateInput";
export declare class ProjectOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    github_url?: "asc" | "desc" | undefined;
    app_url?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    tech_categories?: TechCategoryOrderByRelationAggregateInput | undefined;
    questions?: QuestionOrderByRelationAggregateInput | undefined;
    sketches?: SketchOrderByRelationAggregateInput | undefined;
    admin?: AdminOrderByWithRelationInput | undefined;
    admin_id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
