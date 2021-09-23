import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MessageScalarWhereInput {
    AND?: MessageScalarWhereInput[] | undefined;
    OR?: MessageScalarWhereInput[] | undefined;
    NOT?: MessageScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    subject?: StringFilter | undefined;
    from?: StringFilter | undefined;
    body?: StringFilter | undefined;
    read_status?: BoolFilter | undefined;
    answer_status?: BoolFilter | undefined;
    admin_id?: StringFilter | undefined;
    createdAd?: DateTimeFilter | undefined;
}
