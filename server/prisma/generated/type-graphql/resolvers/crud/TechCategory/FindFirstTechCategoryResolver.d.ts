import { GraphQLResolveInfo } from "graphql";
import { FindFirstTechCategoryArgs } from "./args/FindFirstTechCategoryArgs";
import { TechCategory } from "../../../models/TechCategory";
export declare class FindFirstTechCategoryResolver {
    findFirstTechCategory(ctx: any, info: GraphQLResolveInfo, args: FindFirstTechCategoryArgs): Promise<TechCategory | null>;
}
