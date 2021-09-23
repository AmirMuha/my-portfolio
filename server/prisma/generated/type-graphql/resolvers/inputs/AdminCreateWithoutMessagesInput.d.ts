import { AboutCreateNestedManyWithoutAdminInput } from "../inputs/AboutCreateNestedManyWithoutAdminInput";
import { ProjectCreateNestedManyWithoutAdminInput } from "../inputs/ProjectCreateNestedManyWithoutAdminInput";
export declare class AdminCreateWithoutMessagesInput {
    id?: string | undefined;
    email: string;
    fname: string;
    lname: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    about?: AboutCreateNestedManyWithoutAdminInput | undefined;
    projects?: ProjectCreateNestedManyWithoutAdminInput | undefined;
}
