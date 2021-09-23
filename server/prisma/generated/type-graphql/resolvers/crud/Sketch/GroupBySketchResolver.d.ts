import { GraphQLResolveInfo } from "graphql";
import { GroupBySketchArgs } from "./args/GroupBySketchArgs";
import { SketchGroupBy } from "../../outputs/SketchGroupBy";
export declare class GroupBySketchResolver {
    groupBySketch(ctx: any, info: GraphQLResolveInfo, args: GroupBySketchArgs): Promise<SketchGroupBy[]>;
}
