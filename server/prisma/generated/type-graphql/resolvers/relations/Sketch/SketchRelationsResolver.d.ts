import { Project } from "../../../models/Project";
import { Sketch } from "../../../models/Sketch";
export declare class SketchRelationsResolver {
    project(sketch: Sketch, ctx: any): Promise<Project>;
}
