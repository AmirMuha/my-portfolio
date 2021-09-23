import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
export declare class SketchOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    download_link?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    project?: ProjectOrderByWithRelationInput | undefined;
    project_id?: "asc" | "desc" | undefined;
}
