import { About } from "../../../models/About";
import { Admin } from "../../../models/Admin";
import { Message } from "../../../models/Message";
import { Project } from "../../../models/Project";
import { AdminAboutArgs } from "./args/AdminAboutArgs";
import { AdminMessagesArgs } from "./args/AdminMessagesArgs";
import { AdminProjectsArgs } from "./args/AdminProjectsArgs";
export declare class AdminRelationsResolver {
    about(admin: Admin, ctx: any, args: AdminAboutArgs): Promise<About[]>;
    messages(admin: Admin, ctx: any, args: AdminMessagesArgs): Promise<Message[]>;
    projects(admin: Admin, ctx: any, args: AdminProjectsArgs): Promise<Project[]>;
}
