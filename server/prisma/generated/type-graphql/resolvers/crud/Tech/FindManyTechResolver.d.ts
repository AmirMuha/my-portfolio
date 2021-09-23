import { GraphQLResolveInfo } from "graphql";
import { FindManyTechArgs } from "./args/FindManyTechArgs";
import { Tech } from "../../../models/Tech";
export declare class FindManyTechResolver {
    teches(ctx: any, info: GraphQLResolveInfo, args: FindManyTechArgs): Promise<Tech[]>;
}
