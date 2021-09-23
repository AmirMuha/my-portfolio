import { GraphQLResolveInfo } from "graphql";
import { UpdateManySketchArgs } from "./args/UpdateManySketchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySketchResolver {
    updateManySketch(ctx: any, info: GraphQLResolveInfo, args: UpdateManySketchArgs): Promise<AffectedRowsOutput>;
}
