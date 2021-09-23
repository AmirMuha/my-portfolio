import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MessageUpdateWithoutAdminInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    subject?: StringFieldUpdateOperationsInput | undefined;
    from?: StringFieldUpdateOperationsInput | undefined;
    body?: StringFieldUpdateOperationsInput | undefined;
    read_status?: BoolFieldUpdateOperationsInput | undefined;
    answer_status?: BoolFieldUpdateOperationsInput | undefined;
    createdAd?: DateTimeFieldUpdateOperationsInput | undefined;
}
