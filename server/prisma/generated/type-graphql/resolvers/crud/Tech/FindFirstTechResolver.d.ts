import { GraphQLResolveInfo } from "graphql";
import { FindFirstTechArgs } from "./args/FindFirstTechArgs";
import { Tech } from "../../../models/Tech";
export declare class FindFirstTechResolver {
    findFirstTech(ctx: any, info: GraphQLResolveInfo, args: FindFirstTechArgs): Promise<Tech | null>;
}
