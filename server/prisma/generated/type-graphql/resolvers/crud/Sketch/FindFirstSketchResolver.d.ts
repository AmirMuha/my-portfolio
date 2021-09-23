import { GraphQLResolveInfo } from "graphql";
import { FindFirstSketchArgs } from "./args/FindFirstSketchArgs";
import { Sketch } from "../../../models/Sketch";
export declare class FindFirstSketchResolver {
    findFirstSketch(ctx: any, info: GraphQLResolveInfo, args: FindFirstSketchArgs): Promise<Sketch | null>;
}
