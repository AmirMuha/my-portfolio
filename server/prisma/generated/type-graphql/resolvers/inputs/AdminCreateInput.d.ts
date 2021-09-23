import { AboutCreateNestedManyWithoutAdminInput } from "../inputs/AboutCreateNestedManyWithoutAdminInput";
import { MessageCreateNestedManyWithoutAdminInput } from "../inputs/MessageCreateNestedManyWithoutAdminInput";
import { ProjectCreateNestedManyWithoutAdminInput } from "../inputs/ProjectCreateNestedManyWithoutAdminInput";
export declare class AdminCreateInput {
    id?: string | undefined;
    email: string;
    fname: string;
    lname: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    about?: AboutCreateNestedManyWithoutAdminInput | undefined;
    messages?: MessageCreateNestedManyWithoutAdminInput | undefined;
    projects?: ProjectCreateNestedManyWithoutAdminInput | undefined;
}
