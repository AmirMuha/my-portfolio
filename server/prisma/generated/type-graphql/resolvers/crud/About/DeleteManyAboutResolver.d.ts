import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAboutArgs } from "./args/DeleteManyAboutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAboutResolver {
    deleteManyAbout(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAboutArgs): Promise<AffectedRowsOutput>;
}
