import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAdminArgs } from "./args/UpdateManyAdminArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAdminResolver {
    updateManyAdmin(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAdminArgs): Promise<AffectedRowsOutput>;
}
