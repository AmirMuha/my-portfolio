import { GraphQLResolveInfo } from "graphql";
import { CreateSketchArgs } from "./args/CreateSketchArgs";
import { Sketch } from "../../../models/Sketch";
export declare class CreateSketchResolver {
    createSketch(ctx: any, info: GraphQLResolveInfo, args: CreateSketchArgs): Promise<Sketch>;
}
