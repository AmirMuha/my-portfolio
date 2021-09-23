import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SketchScalarWhereWithAggregatesInput {
    AND?: SketchScalarWhereWithAggregatesInput[] | undefined;
    OR?: SketchScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SketchScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    body?: StringWithAggregatesFilter | undefined;
    download_link?: StringWithAggregatesFilter | undefined;
    image?: StringWithAggregatesFilter | undefined;
    project_id?: StringWithAggregatesFilter | undefined;
}
