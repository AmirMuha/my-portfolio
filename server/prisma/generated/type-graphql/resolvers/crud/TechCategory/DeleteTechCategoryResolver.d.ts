import { GraphQLResolveInfo } from "graphql";
import { DeleteTechCategoryArgs } from "./args/DeleteTechCategoryArgs";
import { TechCategory } from "../../../models/TechCategory";
export declare class DeleteTechCategoryResolver {
    deleteTechCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteTechCategoryArgs): Promise<TechCategory | null>;
}
