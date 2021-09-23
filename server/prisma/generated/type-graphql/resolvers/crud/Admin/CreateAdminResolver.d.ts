import { GraphQLResolveInfo } from "graphql";
import { CreateAdminArgs } from "./args/CreateAdminArgs";
import { Admin } from "../../../models/Admin";
export declare class CreateAdminResolver {
    createAdmin(ctx: any, info: GraphQLResolveInfo, args: CreateAdminArgs): Promise<Admin>;
}
