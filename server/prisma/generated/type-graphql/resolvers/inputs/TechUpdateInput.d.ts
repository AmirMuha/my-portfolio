import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TechCategoryUpdateOneRequiredWithoutTechsInput } from "../inputs/TechCategoryUpdateOneRequiredWithoutTechsInput";
export declare class TechUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    tech_categories?: TechCategoryUpdateOneRequiredWithoutTechsInput | undefined;
}
