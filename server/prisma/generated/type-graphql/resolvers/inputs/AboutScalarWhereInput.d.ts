import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AboutScalarWhereInput {
    AND?: AboutScalarWhereInput[] | undefined;
    OR?: AboutScalarWhereInput[] | undefined;
    NOT?: AboutScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    body?: StringFilter | undefined;
    admin_id?: StringFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
