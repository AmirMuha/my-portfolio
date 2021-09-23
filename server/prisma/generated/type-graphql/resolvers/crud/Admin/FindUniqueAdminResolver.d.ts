import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAdminArgs } from "./args/FindUniqueAdminArgs";
import { Admin } from "../../../models/Admin";
export declare class FindUniqueAdminResolver {
    admin(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAdminArgs): Promise<Admin | null>;
}
