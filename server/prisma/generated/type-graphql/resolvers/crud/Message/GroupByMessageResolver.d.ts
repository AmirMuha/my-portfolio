import { GraphQLResolveInfo } from "graphql";
import { GroupByMessageArgs } from "./args/GroupByMessageArgs";
import { MessageGroupBy } from "../../outputs/MessageGroupBy";
export declare class GroupByMessageResolver {
    groupByMessage(ctx: any, info: GraphQLResolveInfo, args: GroupByMessageArgs): Promise<MessageGroupBy[]>;
}
