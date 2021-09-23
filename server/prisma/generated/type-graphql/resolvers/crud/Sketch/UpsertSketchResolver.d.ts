import { GraphQLResolveInfo } from "graphql";
import { UpsertSketchArgs } from "./args/UpsertSketchArgs";
import { Sketch } from "../../../models/Sketch";
export declare class UpsertSketchResolver {
    upsertSketch(ctx: any, info: GraphQLResolveInfo, args: UpsertSketchArgs): Promise<Sketch>;
}
