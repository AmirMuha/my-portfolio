import { GraphQLResolveInfo } from "graphql";
import { UpsertTechArgs } from "./args/UpsertTechArgs";
import { Tech } from "../../../models/Tech";
export declare class UpsertTechResolver {
    upsertTech(ctx: any, info: GraphQLResolveInfo, args: UpsertTechArgs): Promise<Tech>;
}
