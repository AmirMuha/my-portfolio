import { AdminUpdateOneRequiredWithoutProjectsInput } from "../inputs/AdminUpdateOneRequiredWithoutProjectsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { QuestionUpdateManyWithoutProjectInput } from "../inputs/QuestionUpdateManyWithoutProjectInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TechCategoryUpdateManyWithoutProjectInput } from "../inputs/TechCategoryUpdateManyWithoutProjectInput";
export declare class ProjectUpdateWithoutSketchesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    github_url?: StringFieldUpdateOperationsInput | undefined;
    app_url?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    tech_categories?: TechCategoryUpdateManyWithoutProjectInput | undefined;
    questions?: QuestionUpdateManyWithoutProjectInput | undefined;
    admin?: AdminUpdateOneRequiredWithoutProjectsInput | undefined;
}
