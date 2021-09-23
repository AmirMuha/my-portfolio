import { TechCategoryCreateNestedOneWithoutTechsInput } from "../inputs/TechCategoryCreateNestedOneWithoutTechsInput";
export declare class TechCreateInput {
    id?: string | undefined;
    name: string;
    tech_categories: TechCategoryCreateNestedOneWithoutTechsInput;
}
