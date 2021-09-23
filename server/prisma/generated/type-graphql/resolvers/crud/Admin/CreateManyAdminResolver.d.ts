import { GraphQLResolveInfo } from "graphql";
import { CreateManyAdminArgs } from "./args/CreateManyAdminArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAdminResolver {
    createManyAdmin(ctx: any, info: GraphQLResolveInfo, args: CreateManyAdminArgs): Promise<AffectedRowsOutput>;
}
