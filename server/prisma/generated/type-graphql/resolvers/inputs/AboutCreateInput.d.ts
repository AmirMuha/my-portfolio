import { AdminCreateNestedOneWithoutAboutInput } from "../inputs/AdminCreateNestedOneWithoutAboutInput";
export declare class AboutCreateInput {
    id?: string | undefined;
    title: string;
    body: string;
    updatedAt?: Date | undefined;
    admin: AdminCreateNestedOneWithoutAboutInput;
}
