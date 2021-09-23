import { GraphQLResolveInfo } from "graphql";
import { CreateManyMessageArgs } from "./args/CreateManyMessageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMessageResolver {
    createManyMessage(ctx: any, info: GraphQLResolveInfo, args: CreateManyMessageArgs): Promise<AffectedRowsOutput>;
}
