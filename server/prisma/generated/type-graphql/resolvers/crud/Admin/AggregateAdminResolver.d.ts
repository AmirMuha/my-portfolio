import { GraphQLResolveInfo } from "graphql";
import { AggregateAdminArgs } from "./args/AggregateAdminArgs";
import { AggregateAdmin } from "../../outputs/AggregateAdmin";
export declare class AggregateAdminResolver {
    aggregateAdmin(ctx: any, info: GraphQLResolveInfo, args: AggregateAdminArgs): Promise<AggregateAdmin>;
}
