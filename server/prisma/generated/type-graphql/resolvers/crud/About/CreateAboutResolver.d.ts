import { GraphQLResolveInfo } from "graphql";
import { CreateAboutArgs } from "./args/CreateAboutArgs";
import { About } from "../../../models/About";
export declare class CreateAboutResolver {
    createAbout(ctx: any, info: GraphQLResolveInfo, args: CreateAboutArgs): Promise<About>;
}
