import { Admin } from "../models/Admin";
export declare class Message {
    id: string;
    subject: string;
    from: string;
    body: string;
    read_status: boolean;
    answer_status: boolean;
    admin?: Admin;
    admin_id: string;
    createdAd: Date;
}
