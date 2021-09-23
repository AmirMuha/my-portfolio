import { GraphQLResolveInfo } from "graphql";
import { UpdateProjectArgs } from "./args/UpdateProjectArgs";
import { Project } from "../../../models/Project";
export declare class UpdateProjectResolver {
    updateProject(ctx: any, info: GraphQLResolveInfo, args: UpdateProjectArgs): Promise<Project | null>;
}
