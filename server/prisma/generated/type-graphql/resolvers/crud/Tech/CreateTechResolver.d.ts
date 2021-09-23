import { GraphQLResolveInfo } from "graphql";
import { CreateTechArgs } from "./args/CreateTechArgs";
import { Tech } from "../../../models/Tech";
export declare class CreateTechResolver {
    createTech(ctx: any, info: GraphQLResolveInfo, args: CreateTechArgs): Promise<Tech>;
}
