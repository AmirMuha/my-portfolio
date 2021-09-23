import { StringFilter } from "../inputs/StringFilter";
export declare class TechCategoryScalarWhereInput {
    AND?: TechCategoryScalarWhereInput[] | undefined;
    OR?: TechCategoryScalarWhereInput[] | undefined;
    NOT?: TechCategoryScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    project_id?: StringFilter | undefined;
}
