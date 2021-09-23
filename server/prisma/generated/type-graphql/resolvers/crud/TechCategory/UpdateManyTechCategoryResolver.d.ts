import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTechCategoryArgs } from "./args/UpdateManyTechCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTechCategoryResolver {
    updateManyTechCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTechCategoryArgs): Promise<AffectedRowsOutput>;
}
