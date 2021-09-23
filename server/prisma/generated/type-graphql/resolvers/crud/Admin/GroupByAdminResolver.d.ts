import { GraphQLResolveInfo } from "graphql";
import { GroupByAdminArgs } from "./args/GroupByAdminArgs";
import { AdminGroupBy } from "../../outputs/AdminGroupBy";
export declare class GroupByAdminResolver {
    groupByAdmin(ctx: any, info: GraphQLResolveInfo, args: GroupByAdminArgs): Promise<AdminGroupBy[]>;
}
