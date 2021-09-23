import { GraphQLResolveInfo } from "graphql";
import { DeleteAdminArgs } from "./args/DeleteAdminArgs";
import { Admin } from "../../../models/Admin";
export declare class DeleteAdminResolver {
    deleteAdmin(ctx: any, info: GraphQLResolveInfo, args: DeleteAdminArgs): Promise<Admin | null>;
}
