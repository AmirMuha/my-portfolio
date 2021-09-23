import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProjectScalarWhereWithAggregatesInput {
    AND?: ProjectScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProjectScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProjectScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    image?: StringWithAggregatesFilter | undefined;
    github_url?: StringWithAggregatesFilter | undefined;
    app_url?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    admin_id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
