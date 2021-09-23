import { GraphQLResolveInfo } from "graphql";
import { CreateProjectArgs } from "./args/CreateProjectArgs";
import { Project } from "../../../models/Project";
export declare class CreateProjectResolver {
    createProject(ctx: any, info: GraphQLResolveInfo, args: CreateProjectArgs): Promise<Project>;
}
