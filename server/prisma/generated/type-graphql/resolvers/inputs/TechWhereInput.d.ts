import { StringFilter } from "../inputs/StringFilter";
import { TechCategoryRelationFilter } from "../inputs/TechCategoryRelationFilter";
export declare class TechWhereInput {
    AND?: TechWhereInput[] | undefined;
    OR?: TechWhereInput[] | undefined;
    NOT?: TechWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    tech_categories?: TechCategoryRelationFilter | undefined;
    tech_category_id?: StringFilter | undefined;
}
