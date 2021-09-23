import { GraphQLResolveInfo } from "graphql";
import { UpdateSketchArgs } from "./args/UpdateSketchArgs";
import { Sketch } from "../../../models/Sketch";
export declare class UpdateSketchResolver {
    updateSketch(ctx: any, info: GraphQLResolveInfo, args: UpdateSketchArgs): Promise<Sketch | null>;
}
