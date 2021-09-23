import { Admin } from "../../../models/Admin";
import { Message } from "../../../models/Message";
export declare class MessageRelationsResolver {
    admin(message: Message, ctx: any): Promise<Admin>;
}
