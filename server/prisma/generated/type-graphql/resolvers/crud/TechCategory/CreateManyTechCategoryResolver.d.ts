import { GraphQLResolveInfo } from "graphql";
import { CreateManyTechCategoryArgs } from "./args/CreateManyTechCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTechCategoryResolver {
    createManyTechCategory(ctx: any, info: GraphQLResolveInfo, args: CreateManyTechCategoryArgs): Promise<AffectedRowsOutput>;
}
