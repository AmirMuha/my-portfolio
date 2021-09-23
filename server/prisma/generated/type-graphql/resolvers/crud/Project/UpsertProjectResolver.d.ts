import { GraphQLResolveInfo } from "graphql";
import { UpsertProjectArgs } from "./args/UpsertProjectArgs";
import { Project } from "../../../models/Project";
export declare class UpsertProjectResolver {
    upsertProject(ctx: any, info: GraphQLResolveInfo, args: UpsertProjectArgs): Promise<Project>;
}
