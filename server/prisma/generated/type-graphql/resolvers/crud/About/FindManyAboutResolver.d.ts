import { GraphQLResolveInfo } from "graphql";
import { FindManyAboutArgs } from "./args/FindManyAboutArgs";
import { About } from "../../../models/About";
export declare class FindManyAboutResolver {
    abouts(ctx: any, info: GraphQLResolveInfo, args: FindManyAboutArgs): Promise<About[]>;
}
