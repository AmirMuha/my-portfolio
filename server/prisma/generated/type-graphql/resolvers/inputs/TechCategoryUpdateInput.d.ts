import { ProjectUpdateOneRequiredWithoutTech_categoriesInput } from "../inputs/ProjectUpdateOneRequiredWithoutTech_categoriesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TechUpdateManyWithoutTech_categoriesInput } from "../inputs/TechUpdateManyWithoutTech_categoriesInput";
export declare class TechCategoryUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    techs?: TechUpdateManyWithoutTech_categoriesInput | undefined;
    project?: ProjectUpdateOneRequiredWithoutTech_categoriesInput | undefined;
}
