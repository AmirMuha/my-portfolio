import { GraphQLResolveInfo } from "graphql";
import { AggregateMessageArgs } from "./args/AggregateMessageArgs";
import { AggregateMessage } from "../../outputs/AggregateMessage";
export declare class AggregateMessageResolver {
    aggregateMessage(ctx: any, info: GraphQLResolveInfo, args: AggregateMessageArgs): Promise<AggregateMessage>;
}
