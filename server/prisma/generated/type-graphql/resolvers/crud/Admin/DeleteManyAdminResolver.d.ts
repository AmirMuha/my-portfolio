import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAdminArgs } from "./args/DeleteManyAdminArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAdminResolver {
    deleteManyAdmin(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAdminArgs): Promise<AffectedRowsOutput>;
}
