import { GraphQLResolveInfo } from "graphql";
import { DeleteManySketchArgs } from "./args/DeleteManySketchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySketchResolver {
    deleteManySketch(ctx: any, info: GraphQLResolveInfo, args: DeleteManySketchArgs): Promise<AffectedRowsOutput>;
}
