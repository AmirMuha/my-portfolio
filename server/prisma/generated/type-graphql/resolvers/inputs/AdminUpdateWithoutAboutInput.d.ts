import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutAdminInput } from "../inputs/MessageUpdateManyWithoutAdminInput";
import { ProjectUpdateManyWithoutAdminInput } from "../inputs/ProjectUpdateManyWithoutAdminInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AdminUpdateWithoutAboutInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    fname?: StringFieldUpdateOperationsInput | undefined;
    lname?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    messages?: MessageUpdateManyWithoutAdminInput | undefined;
    projects?: ProjectUpdateManyWithoutAdminInput | undefined;
}
