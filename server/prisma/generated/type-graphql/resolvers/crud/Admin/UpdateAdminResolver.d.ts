import { GraphQLResolveInfo } from "graphql";
import { UpdateAdminArgs } from "./args/UpdateAdminArgs";
import { Admin } from "../../../models/Admin";
export declare class UpdateAdminResolver {
    updateAdmin(ctx: any, info: GraphQLResolveInfo, args: UpdateAdminArgs): Promise<Admin | null>;
}
