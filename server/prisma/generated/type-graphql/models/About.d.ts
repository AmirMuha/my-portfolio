import { Admin } from "../models/Admin";
export declare class About {
    id: string;
    title: string;
    body: string;
    admin?: Admin;
    admin_id: string;
    updatedAt: Date;
}
