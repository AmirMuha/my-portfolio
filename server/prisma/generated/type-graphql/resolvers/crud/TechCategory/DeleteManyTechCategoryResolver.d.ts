import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTechCategoryArgs } from "./args/DeleteManyTechCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTechCategoryResolver {
    deleteManyTechCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTechCategoryArgs): Promise<AffectedRowsOutput>;
}
