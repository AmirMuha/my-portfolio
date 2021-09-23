import { GraphQLResolveInfo } from "graphql";
import { AggregateSketchArgs } from "./args/AggregateSketchArgs";
import { AggregateSketch } from "../../outputs/AggregateSketch";
export declare class AggregateSketchResolver {
    aggregateSketch(ctx: any, info: GraphQLResolveInfo, args: AggregateSketchArgs): Promise<AggregateSketch>;
}
