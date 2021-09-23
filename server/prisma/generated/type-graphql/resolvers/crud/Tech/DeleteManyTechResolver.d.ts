import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTechArgs } from "./args/DeleteManyTechArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTechResolver {
    deleteManyTech(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTechArgs): Promise<AffectedRowsOutput>;
}
