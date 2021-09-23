import { GraphQLResolveInfo } from "graphql";
import { CreateTechCategoryArgs } from "./args/CreateTechCategoryArgs";
import { TechCategory } from "../../../models/TechCategory";
export declare class CreateTechCategoryResolver {
    createTechCategory(ctx: any, info: GraphQLResolveInfo, args: CreateTechCategoryArgs): Promise<TechCategory>;
}
