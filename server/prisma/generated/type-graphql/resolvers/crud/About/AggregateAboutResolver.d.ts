import { GraphQLResolveInfo } from "graphql";
import { AggregateAboutArgs } from "./args/AggregateAboutArgs";
import { AggregateAbout } from "../../outputs/AggregateAbout";
export declare class AggregateAboutResolver {
    aggregateAbout(ctx: any, info: GraphQLResolveInfo, args: AggregateAboutArgs): Promise<AggregateAbout>;
}
