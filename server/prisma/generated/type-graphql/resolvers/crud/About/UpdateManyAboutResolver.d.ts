import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAboutArgs } from "./args/UpdateManyAboutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAboutResolver {
    updateManyAbout(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAboutArgs): Promise<AffectedRowsOutput>;
}
