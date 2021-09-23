import { AboutUpdateManyWithoutAdminInput } from "../inputs/AboutUpdateManyWithoutAdminInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutAdminInput } from "../inputs/ProjectUpdateManyWithoutAdminInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AdminUpdateWithoutMessagesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    fname?: StringFieldUpdateOperationsInput | undefined;
    lname?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    about?: AboutUpdateManyWithoutAdminInput | undefined;
    projects?: ProjectUpdateManyWithoutAdminInput | undefined;
}
