import { GraphQLResolveInfo } from "graphql";
import { UpsertAboutArgs } from "./args/UpsertAboutArgs";
import { About } from "../../../models/About";
export declare class UpsertAboutResolver {
    upsertAbout(ctx: any, info: GraphQLResolveInfo, args: UpsertAboutArgs): Promise<About>;
}
