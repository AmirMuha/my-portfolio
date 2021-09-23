import { GraphQLResolveInfo } from "graphql";
import { UpdateMessageArgs } from "./args/UpdateMessageArgs";
import { Message } from "../../../models/Message";
export declare class UpdateMessageResolver {
    updateMessage(ctx: any, info: GraphQLResolveInfo, args: UpdateMessageArgs): Promise<Message | null>;
}
