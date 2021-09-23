import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMessageArgs } from "./args/UpdateManyMessageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMessageResolver {
    updateManyMessage(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMessageArgs): Promise<AffectedRowsOutput>;
}
