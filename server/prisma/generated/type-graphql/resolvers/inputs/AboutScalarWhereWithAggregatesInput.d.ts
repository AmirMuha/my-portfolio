import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AboutScalarWhereWithAggregatesInput {
    AND?: AboutScalarWhereWithAggregatesInput[] | undefined;
    OR?: AboutScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AboutScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    body?: StringWithAggregatesFilter | undefined;
    admin_id?: StringWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
