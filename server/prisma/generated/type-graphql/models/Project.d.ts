import { Admin } from "../models/Admin";
import { Question } from "../models/Question";
import { Sketch } from "../models/Sketch";
import { TechCategory } from "../models/TechCategory";
import { ProjectCount } from "../resolvers/outputs/ProjectCount";
export declare class Project {
    id: string;
    name: string;
    image: string;
    github_url: string;
    app_url: string;
    description: string;
    tech_categories?: TechCategory[];
    questions?: Question[];
    sketches?: Sketch[];
    admin?: Admin;
    admin_id: string;
    createdAt: Date;
    updatedAt: Date;
    _count?: ProjectCount | null;
}
