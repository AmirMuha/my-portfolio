import { GraphQLResolveInfo } from "graphql";
import { UpsertAdminArgs } from "./args/UpsertAdminArgs";
import { Admin } from "../../../models/Admin";
export declare class UpsertAdminResolver {
    upsertAdmin(ctx: any, info: GraphQLResolveInfo, args: UpsertAdminArgs): Promise<Admin>;
}
