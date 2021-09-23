import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TechListRelationFilter } from "../inputs/TechListRelationFilter";
export declare class TechCategoryWhereInput {
    AND?: TechCategoryWhereInput[] | undefined;
    OR?: TechCategoryWhereInput[] | undefined;
    NOT?: TechCategoryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    techs?: TechListRelationFilter | undefined;
    project?: ProjectRelationFilter | undefined;
    project_id?: StringFilter | undefined;
}
