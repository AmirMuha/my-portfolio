import { GraphQLResolveInfo } from "graphql";
import { FindFirstMessageArgs } from "./args/FindFirstMessageArgs";
import { Message } from "../../../models/Message";
export declare class FindFirstMessageResolver {
    findFirstMessage(ctx: any, info: GraphQLResolveInfo, args: FindFirstMessageArgs): Promise<Message | null>;
}
