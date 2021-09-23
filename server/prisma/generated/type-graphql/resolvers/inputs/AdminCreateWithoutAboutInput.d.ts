import { MessageCreateNestedManyWithoutAdminInput } from "../inputs/MessageCreateNestedManyWithoutAdminInput";
import { ProjectCreateNestedManyWithoutAdminInput } from "../inputs/ProjectCreateNestedManyWithoutAdminInput";
export declare class AdminCreateWithoutAboutInput {
    id?: string | undefined;
    email: string;
    fname: string;
    lname: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    messages?: MessageCreateNestedManyWithoutAdminInput | undefined;
    projects?: ProjectCreateNestedManyWithoutAdminInput | undefined;
}
