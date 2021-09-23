import { GraphQLResolveInfo } from "graphql";
import { DeleteSketchArgs } from "./args/DeleteSketchArgs";
import { Sketch } from "../../../models/Sketch";
export declare class DeleteSketchResolver {
    deleteSketch(ctx: any, info: GraphQLResolveInfo, args: DeleteSketchArgs): Promise<Sketch | null>;
}
