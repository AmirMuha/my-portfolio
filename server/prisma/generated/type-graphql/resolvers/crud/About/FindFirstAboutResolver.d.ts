import { GraphQLResolveInfo } from "graphql";
import { FindFirstAboutArgs } from "./args/FindFirstAboutArgs";
import { About } from "../../../models/About";
export declare class FindFirstAboutResolver {
    findFirstAbout(ctx: any, info: GraphQLResolveInfo, args: FindFirstAboutArgs): Promise<About | null>;
}
