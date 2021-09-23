import { GraphQLResolveInfo } from "graphql";
import { DeleteProjectArgs } from "./args/DeleteProjectArgs";
import { Project } from "../../../models/Project";
export declare class DeleteProjectResolver {
    deleteProject(ctx: any, info: GraphQLResolveInfo, args: DeleteProjectArgs): Promise<Project | null>;
}
