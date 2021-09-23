import { GraphQLResolveInfo } from "graphql";
import { DeleteMessageArgs } from "./args/DeleteMessageArgs";
import { Message } from "../../../models/Message";
export declare class DeleteMessageResolver {
    deleteMessage(ctx: any, info: GraphQLResolveInfo, args: DeleteMessageArgs): Promise<Message | null>;
}
