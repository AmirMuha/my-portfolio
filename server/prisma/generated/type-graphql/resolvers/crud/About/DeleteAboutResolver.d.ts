import { GraphQLResolveInfo } from "graphql";
import { DeleteAboutArgs } from "./args/DeleteAboutArgs";
import { About } from "../../../models/About";
export declare class DeleteAboutResolver {
    deleteAbout(ctx: any, info: GraphQLResolveInfo, args: DeleteAboutArgs): Promise<About | null>;
}
