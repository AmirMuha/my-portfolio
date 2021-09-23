import { GraphQLResolveInfo } from "graphql";
import { FindManyAdminArgs } from "./args/FindManyAdminArgs";
import { Admin } from "../../../models/Admin";
export declare class FindManyAdminResolver {
    admins(ctx: any, info: GraphQLResolveInfo, args: FindManyAdminArgs): Promise<Admin[]>;
}
