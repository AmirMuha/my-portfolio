import { GraphQLResolveInfo } from "graphql";
import { UpdateTechCategoryArgs } from "./args/UpdateTechCategoryArgs";
import { TechCategory } from "../../../models/TechCategory";
export declare class UpdateTechCategoryResolver {
    updateTechCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateTechCategoryArgs): Promise<TechCategory | null>;
}
