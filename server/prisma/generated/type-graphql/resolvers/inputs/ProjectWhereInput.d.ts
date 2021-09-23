import { AdminRelationFilter } from "../inputs/AdminRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { QuestionListRelationFilter } from "../inputs/QuestionListRelationFilter";
import { SketchListRelationFilter } from "../inputs/SketchListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TechCategoryListRelationFilter } from "../inputs/TechCategoryListRelationFilter";
export declare class ProjectWhereInput {
    AND?: ProjectWhereInput[] | undefined;
    OR?: ProjectWhereInput[] | undefined;
    NOT?: ProjectWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    image?: StringFilter | undefined;
    github_url?: StringFilter | undefined;
    app_url?: StringFilter | undefined;
    description?: StringFilter | undefined;
    tech_categories?: TechCategoryListRelationFilter | undefined;
    questions?: QuestionListRelationFilter | undefined;
    sketches?: SketchListRelationFilter | undefined;
    admin?: AdminRelationFilter | undefined;
    admin_id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
