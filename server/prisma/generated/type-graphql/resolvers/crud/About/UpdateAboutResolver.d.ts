import { GraphQLResolveInfo } from "graphql";
import { UpdateAboutArgs } from "./args/UpdateAboutArgs";
import { About } from "../../../models/About";
export declare class UpdateAboutResolver {
    updateAbout(ctx: any, info: GraphQLResolveInfo, args: UpdateAboutArgs): Promise<About | null>;
}
