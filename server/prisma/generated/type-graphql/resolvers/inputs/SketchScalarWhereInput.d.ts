import { StringFilter } from "../inputs/StringFilter";
export declare class SketchScalarWhereInput {
    AND?: SketchScalarWhereInput[] | undefined;
    OR?: SketchScalarWhereInput[] | undefined;
    NOT?: SketchScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    body?: StringFilter | undefined;
    download_link?: StringFilter | undefined;
    image?: StringFilter | undefined;
    project_id?: StringFilter | undefined;
}
