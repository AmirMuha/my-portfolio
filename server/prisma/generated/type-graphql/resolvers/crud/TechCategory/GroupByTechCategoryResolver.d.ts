import { GraphQLResolveInfo } from "graphql";
import { GroupByTechCategoryArgs } from "./args/GroupByTechCategoryArgs";
import { TechCategoryGroupBy } from "../../outputs/TechCategoryGroupBy";
export declare class GroupByTechCategoryResolver {
    groupByTechCategory(ctx: any, info: GraphQLResolveInfo, args: GroupByTechCategoryArgs): Promise<TechCategoryGroupBy[]>;
}
