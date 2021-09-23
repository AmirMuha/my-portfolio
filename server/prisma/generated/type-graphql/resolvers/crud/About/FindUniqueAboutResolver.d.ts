import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAboutArgs } from "./args/FindUniqueAboutArgs";
import { About } from "../../../models/About";
export declare class FindUniqueAboutResolver {
    about(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAboutArgs): Promise<About | null>;
}
