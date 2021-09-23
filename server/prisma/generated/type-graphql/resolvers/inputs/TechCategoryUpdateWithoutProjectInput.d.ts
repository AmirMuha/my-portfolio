import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TechUpdateManyWithoutTech_categoriesInput } from "../inputs/TechUpdateManyWithoutTech_categoriesInput";
export declare class TechCategoryUpdateWithoutProjectInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    techs?: TechUpdateManyWithoutTech_categoriesInput | undefined;
}
