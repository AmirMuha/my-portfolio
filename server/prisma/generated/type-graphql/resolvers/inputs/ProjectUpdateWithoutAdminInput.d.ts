import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { QuestionUpdateManyWithoutProjectInput } from "../inputs/QuestionUpdateManyWithoutProjectInput";
import { SketchUpdateManyWithoutProjectInput } from "../inputs/SketchUpdateManyWithoutProjectInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TechCategoryUpdateManyWithoutProjectInput } from "../inputs/TechCategoryUpdateManyWithoutProjectInput";
export declare class ProjectUpdateWithoutAdminInput {
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
    sketches?: SketchUpdateManyWithoutProjectInput | undefined;
}
