import { AboutListRelationFilter } from "../inputs/AboutListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { ProjectListRelationFilter } from "../inputs/ProjectListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AdminWhereInput {
    AND?: AdminWhereInput[] | undefined;
    OR?: AdminWhereInput[] | undefined;
    NOT?: AdminWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    fname?: StringFilter | undefined;
    lname?: StringFilter | undefined;
    about?: AboutListRelationFilter | undefined;
    messages?: MessageListRelationFilter | undefined;
    projects?: ProjectListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
