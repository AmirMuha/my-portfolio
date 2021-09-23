import { GraphQLResolveInfo } from "graphql";
import { UpdateTechArgs } from "./args/UpdateTechArgs";
import { Tech } from "../../../models/Tech";
export declare class UpdateTechResolver {
    updateTech(ctx: any, info: GraphQLResolveInfo, args: UpdateTechArgs): Promise<Tech | null>;
}
