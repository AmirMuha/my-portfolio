import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTechArgs } from "./args/FindUniqueTechArgs";
import { Tech } from "../../../models/Tech";
export declare class FindUniqueTechResolver {
    tech(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTechArgs): Promise<Tech | null>;
}
