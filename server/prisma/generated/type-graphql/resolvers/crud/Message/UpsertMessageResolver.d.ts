import { GraphQLResolveInfo } from "graphql";
import { UpsertMessageArgs } from "./args/UpsertMessageArgs";
import { Message } from "../../../models/Message";
export declare class UpsertMessageResolver {
    upsertMessage(ctx: any, info: GraphQLResolveInfo, args: UpsertMessageArgs): Promise<Message>;
}
