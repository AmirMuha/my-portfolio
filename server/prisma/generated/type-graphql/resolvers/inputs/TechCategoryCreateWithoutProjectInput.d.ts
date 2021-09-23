import { TechCreateNestedManyWithoutTech_categoriesInput } from "../inputs/TechCreateNestedManyWithoutTech_categoriesInput";
export declare class TechCategoryCreateWithoutProjectInput {
    id?: string | undefined;
    name: string;
    techs?: TechCreateNestedManyWithoutTech_categoriesInput | undefined;
}
