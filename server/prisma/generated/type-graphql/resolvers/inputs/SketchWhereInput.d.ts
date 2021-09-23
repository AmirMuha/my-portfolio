import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SketchWhereInput {
    AND?: SketchWhereInput[] | undefined;
    OR?: SketchWhereInput[] | undefined;
    NOT?: SketchWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    body?: StringFilter | undefined;
    download_link?: StringFilter | undefined;
    image?: StringFilter | undefined;
    project?: ProjectRelationFilter | undefined;
    project_id?: StringFilter | undefined;
}
