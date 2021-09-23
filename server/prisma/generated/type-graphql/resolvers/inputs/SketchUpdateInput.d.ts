import { ProjectUpdateOneRequiredWithoutSketchesInput } from "../inputs/ProjectUpdateOneRequiredWithoutSketchesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SketchUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    body?: StringFieldUpdateOperationsInput | undefined;
    download_link?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    project?: ProjectUpdateOneRequiredWithoutSketchesInput | undefined;
}
