import { AdminRelationFilter } from "../inputs/AdminRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AboutWhereInput {
    AND?: AboutWhereInput[] | undefined;
    OR?: AboutWhereInput[] | undefined;
    NOT?: AboutWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    body?: StringFilter | undefined;
    admin?: AdminRelationFilter | undefined;
    admin_id?: StringFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
