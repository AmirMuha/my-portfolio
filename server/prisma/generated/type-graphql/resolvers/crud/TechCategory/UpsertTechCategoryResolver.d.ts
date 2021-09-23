import { GraphQLResolveInfo } from "graphql";
import { UpsertTechCategoryArgs } from "./args/UpsertTechCategoryArgs";
import { TechCategory } from "../../../models/TechCategory";
export declare class UpsertTechCategoryResolver {
    upsertTechCategory(ctx: any, info: GraphQLResolveInfo, args: UpsertTechCategoryArgs): Promise<TechCategory>;
}
