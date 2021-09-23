import { GraphQLResolveInfo } from "graphql";
import { CreateManySketchArgs } from "./args/CreateManySketchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySketchResolver {
    createManySketch(ctx: any, info: GraphQLResolveInfo, args: CreateManySketchArgs): Promise<AffectedRowsOutput>;
}
