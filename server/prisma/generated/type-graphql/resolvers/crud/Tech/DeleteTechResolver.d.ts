import { GraphQLResolveInfo } from "graphql";
import { DeleteTechArgs } from "./args/DeleteTechArgs";
import { Tech } from "../../../models/Tech";
export declare class DeleteTechResolver {
    deleteTech(ctx: any, info: GraphQLResolveInfo, args: DeleteTechArgs): Promise<Tech | null>;
}
