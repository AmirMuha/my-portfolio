import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTechCategoryArgs } from "./args/FindUniqueTechCategoryArgs";
import { TechCategory } from "../../../models/TechCategory";
export declare class FindUniqueTechCategoryResolver {
    techCategory(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTechCategoryArgs): Promise<TechCategory | null>;
}
