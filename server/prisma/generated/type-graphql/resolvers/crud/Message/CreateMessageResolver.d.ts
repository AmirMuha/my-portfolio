import { GraphQLResolveInfo } from "graphql";
import { CreateMessageArgs } from "./args/CreateMessageArgs";
import { Message } from "../../../models/Message";
export declare class CreateMessageResolver {
    createMessage(ctx: any, info: GraphQLResolveInfo, args: CreateMessageArgs): Promise<Message>;
}
