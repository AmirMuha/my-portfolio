import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MessageScalarWhereWithAggregatesInput {
    AND?: MessageScalarWhereWithAggregatesInput[] | undefined;
    OR?: MessageScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MessageScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    subject?: StringWithAggregatesFilter | undefined;
    from?: StringWithAggregatesFilter | undefined;
    body?: StringWithAggregatesFilter | undefined;
    read_status?: BoolWithAggregatesFilter | undefined;
    answer_status?: BoolWithAggregatesFilter | undefined;
    admin_id?: StringWithAggregatesFilter | undefined;
    createdAd?: DateTimeWithAggregatesFilter | undefined;
}
