import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProjectScalarWhereInput {
    AND?: ProjectScalarWhereInput[] | undefined;
    OR?: ProjectScalarWhereInput[] | undefined;
    NOT?: ProjectScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    image?: StringFilter | undefined;
    github_url?: StringFilter | undefined;
    app_url?: StringFilter | undefined;
    description?: StringFilter | undefined;
    admin_id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
