import { AboutUpdateManyWithoutAdminInput } from "../inputs/AboutUpdateManyWithoutAdminInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutAdminInput } from "../inputs/MessageUpdateManyWithoutAdminInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AdminUpdateWithoutProjectsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    fname?: StringFieldUpdateOperationsInput | undefined;
    lname?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    about?: AboutUpdateManyWithoutAdminInput | undefined;
    messages?: MessageUpdateManyWithoutAdminInput | undefined;
}
