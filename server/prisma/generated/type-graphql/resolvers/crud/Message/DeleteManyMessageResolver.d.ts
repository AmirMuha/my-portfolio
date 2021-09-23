import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMessageArgs } from "./args/DeleteManyMessageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMessageResolver {
    deleteManyMessage(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMessageArgs): Promise<AffectedRowsOutput>;
}
