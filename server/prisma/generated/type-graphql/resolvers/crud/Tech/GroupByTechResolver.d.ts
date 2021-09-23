import { GraphQLResolveInfo } from "graphql";
import { GroupByTechArgs } from "./args/GroupByTechArgs";
import { TechGroupBy } from "../../outputs/TechGroupBy";
export declare class GroupByTechResolver {
    groupByTech(ctx: any, info: GraphQLResolveInfo, args: GroupByTechArgs): Promise<TechGroupBy[]>;
}
