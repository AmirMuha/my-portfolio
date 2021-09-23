import { AdminRelationFilter } from "../inputs/AdminRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MessageWhereInput {
    AND?: MessageWhereInput[] | undefined;
    OR?: MessageWhereInput[] | undefined;
    NOT?: MessageWhereInput[] | undefined;
    id?: StringFilter | undefined;
    subject?: StringFilter | undefined;
    from?: StringFilter | undefined;
    body?: StringFilter | undefined;
    read_status?: BoolFilter | undefined;
    answer_status?: BoolFilter | undefined;
    admin?: AdminRelationFilter | undefined;
    admin_id?: StringFilter | undefined;
    createdAd?: DateTimeFilter | undefined;
}
