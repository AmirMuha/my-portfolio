import { GraphQLResolveInfo } from "graphql";
import { FindFirstAdminArgs } from "./args/FindFirstAdminArgs";
import { Admin } from "../../../models/Admin";
export declare class FindFirstAdminResolver {
    findFirstAdmin(ctx: any, info: GraphQLResolveInfo, args: FindFirstAdminArgs): Promise<Admin | null>;
}
