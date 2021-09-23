import { GraphQLResolveInfo } from "graphql";
import { AggregateTechArgs } from "./args/AggregateTechArgs";
import { AggregateTech } from "../../outputs/AggregateTech";
export declare class AggregateTechResolver {
    aggregateTech(ctx: any, info: GraphQLResolveInfo, args: AggregateTechArgs): Promise<AggregateTech>;
}
