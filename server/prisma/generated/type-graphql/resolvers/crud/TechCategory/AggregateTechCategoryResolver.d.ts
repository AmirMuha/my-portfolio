import { GraphQLResolveInfo } from "graphql";
import { AggregateTechCategoryArgs } from "./args/AggregateTechCategoryArgs";
import { AggregateTechCategory } from "../../outputs/AggregateTechCategory";
export declare class AggregateTechCategoryResolver {
    aggregateTechCategory(ctx: any, info: GraphQLResolveInfo, args: AggregateTechCategoryArgs): Promise<AggregateTechCategory>;
}
