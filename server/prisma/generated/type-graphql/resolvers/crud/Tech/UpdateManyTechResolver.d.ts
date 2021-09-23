import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTechArgs } from "./args/UpdateManyTechArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTechResolver {
    updateManyTech(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTechArgs): Promise<AffectedRowsOutput>;
}
