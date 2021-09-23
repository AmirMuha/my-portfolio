import { AdminCreateNestedOneWithoutMessagesInput } from "../inputs/AdminCreateNestedOneWithoutMessagesInput";
export declare class MessageCreateInput {
    id?: string | undefined;
    subject: string;
    from: string;
    body: string;
    read_status?: boolean | undefined;
    answer_status?: boolean | undefined;
    createdAd?: Date | undefined;
    admin: AdminCreateNestedOneWithoutMessagesInput;
}
