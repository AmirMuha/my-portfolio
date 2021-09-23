import { ProjectCreateNestedOneWithoutTech_categoriesInput } from "../inputs/ProjectCreateNestedOneWithoutTech_categoriesInput";
export declare class TechCategoryCreateWithoutTechsInput {
    id?: string | undefined;
    name: string;
    project: ProjectCreateNestedOneWithoutTech_categoriesInput;
}
