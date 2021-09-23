import { About } from "../../../models/About";
import { Admin } from "../../../models/Admin";
export declare class AboutRelationsResolver {
    admin(about: About, ctx: any): Promise<Admin>;
}
