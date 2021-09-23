import { AdminUpdateOneRequiredWithoutProjectsInput } from "../inputs/AdminUpdateOneRequiredWithoutProjectsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { QuestionUpdateManyWithoutProjectInput } from "../inputs/QuestionUpdateManyWithoutProjectInput";
import { SketchUpdateManyWithoutProjectInput } from "../inputs/SketchUpdateManyWithoutProjectInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProjectUpdateWithoutTech_categoriesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    github_url?: StringFieldUpdateOperationsInput | undefined;
    app_url?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    questions?: QuestionUpdateManyWithoutProjectInput | undefined;
    sketches?: SketchUpdateManyWithoutProjectInput | undefined;
    admin?: AdminUpdateOneRequiredWithoutProjectsInput | undefined;
}
