import { GraphQLResolveInfo } from "graphql";
import { GroupByAboutArgs } from "./args/GroupByAboutArgs";
import { AboutGroupBy } from "../../outputs/AboutGroupBy";
export declare class GroupByAboutResolver {
    groupByAbout(ctx: any, info: GraphQLResolveInfo, args: GroupByAboutArgs): Promise<AboutGroupBy[]>;
}
