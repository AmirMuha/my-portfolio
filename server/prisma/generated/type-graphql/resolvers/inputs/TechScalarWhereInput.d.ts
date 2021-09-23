import { StringFilter } from "../inputs/StringFilter";
export declare class TechScalarWhereInput {
    AND?: TechScalarWhereInput[] | undefined;
    OR?: TechScalarWhereInput[] | undefined;
    NOT?: TechScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    tech_category_id?: StringFilter | undefined;
}
