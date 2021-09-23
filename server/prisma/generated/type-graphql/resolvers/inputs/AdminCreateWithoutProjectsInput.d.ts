import { AboutCreateNestedManyWithoutAdminInput } from "../inputs/AboutCreateNestedManyWithoutAdminInput";
import { MessageCreateNestedManyWithoutAdminInput } from "../inputs/MessageCreateNestedManyWithoutAdminInput";
export declare class AdminCreateWithoutProjectsInput {
    id?: string | undefined;
    email: string;
    fname: string;
    lname: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    about?: AboutCreateNestedManyWithoutAdminInput | undefined;
    messages?: MessageCreateNestedManyWithoutAdminInput | undefined;
}
