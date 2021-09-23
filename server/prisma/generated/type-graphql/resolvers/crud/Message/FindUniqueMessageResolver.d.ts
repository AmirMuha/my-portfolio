import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMessageArgs } from "./args/FindUniqueMessageArgs";
import { Message } from "../../../models/Message";
export declare class FindUniqueMessageResolver {
    message(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMessageArgs): Promise<Message | null>;
}
