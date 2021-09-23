import { GraphQLResolveInfo } from "graphql";
import { FindManySketchArgs } from "./args/FindManySketchArgs";
import { Sketch } from "../../../models/Sketch";
export declare class FindManySketchResolver {
    sketches(ctx: any, info: GraphQLResolveInfo, args: FindManySketchArgs): Promise<Sketch[]>;
}
