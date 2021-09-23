import { About } from "../models/About";
import { Message } from "../models/Message";
import { Project } from "../models/Project";
import { AdminCount } from "../resolvers/outputs/AdminCount";
export declare class Admin {
    id: string;
    email: string;
    fname: string;
    lname: string;
    about?: About[];
    messages?: Message[];
    projects?: Project[];
    apikey?: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
    _count?: AdminCount | null;
}
