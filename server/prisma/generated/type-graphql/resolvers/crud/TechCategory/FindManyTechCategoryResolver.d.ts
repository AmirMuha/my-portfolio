import { GraphQLResolveInfo } from "graphql";
import { FindManyTechCategoryArgs } from "./args/FindManyTechCategoryArgs";
import { TechCategory } from "../../../models/TechCategory";
export declare class FindManyTechCategoryResolver {
    techCategories(ctx: any, info: GraphQLResolveInfo, args: FindManyTechCategoryArgs): Promise<TechCategory[]>;
}
