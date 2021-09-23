import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AdminScalarWhereWithAggregatesInput {
    AND?: AdminScalarWhereWithAggregatesInput[] | undefined;
    OR?: AdminScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AdminScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    fname?: StringWithAggregatesFilter | undefined;
    lname?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
