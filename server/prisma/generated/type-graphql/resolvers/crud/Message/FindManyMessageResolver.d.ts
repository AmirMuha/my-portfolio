import { GraphQLResolveInfo } from "graphql";
import { FindManyMessageArgs } from "./args/FindManyMessageArgs";
import { Message } from "../../../models/Message";
export declare class FindManyMessageResolver {
    messages(ctx: any, info: GraphQLResolveInfo, args: FindManyMessageArgs): Promise<Message[]>;
}
