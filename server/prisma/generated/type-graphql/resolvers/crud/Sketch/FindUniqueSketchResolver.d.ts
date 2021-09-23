import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSketchArgs } from "./args/FindUniqueSketchArgs";
import { Sketch } from "../../../models/Sketch";
export declare class FindUniqueSketchResolver {
    sketch(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSketchArgs): Promise<Sketch | null>;
}
