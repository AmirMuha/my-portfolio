import { TechCategoryOrderByWithRelationInput } from "../inputs/TechCategoryOrderByWithRelationInput";
export declare class TechOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tech_categories?: TechCategoryOrderByWithRelationInput | undefined;
    tech_category_id?: "asc" | "desc" | undefined;
}
