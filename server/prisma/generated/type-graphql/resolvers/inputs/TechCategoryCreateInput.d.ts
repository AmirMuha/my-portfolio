import { ProjectCreateNestedOneWithoutTech_categoriesInput } from "../inputs/ProjectCreateNestedOneWithoutTech_categoriesInput";
import { TechCreateNestedManyWithoutTech_categoriesInput } from "../inputs/TechCreateNestedManyWithoutTech_categoriesInput";
export declare class TechCategoryCreateInput {
    id?: string | undefined;
    name: string;
    techs?: TechCreateNestedManyWithoutTech_categoriesInput | undefined;
    project: ProjectCreateNestedOneWithoutTech_categoriesInput;
}
