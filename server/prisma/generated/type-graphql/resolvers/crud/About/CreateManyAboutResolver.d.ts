import { GraphQLResolveInfo } from "graphql";
import { CreateManyAboutArgs } from "./args/CreateManyAboutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAboutResolver {
    createManyAbout(ctx: any, info: GraphQLResolveInfo, args: CreateManyAboutArgs): Promise<AffectedRowsOutput>;
}
