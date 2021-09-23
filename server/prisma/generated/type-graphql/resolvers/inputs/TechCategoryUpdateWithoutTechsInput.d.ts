import { ProjectUpdateOneRequiredWithoutTech_categoriesInput } from "../inputs/ProjectUpdateOneRequiredWithoutTech_categoriesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TechCategoryUpdateWithoutTechsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    project?: ProjectUpdateOneRequiredWithoutTech_categoriesInput | undefined;
}
