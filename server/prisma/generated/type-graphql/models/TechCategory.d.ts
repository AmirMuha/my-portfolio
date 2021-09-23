import { Project } from "../models/Project";
import { Tech } from "../models/Tech";
import { TechCategoryCount } from "../resolvers/outputs/TechCategoryCount";
export declare class TechCategory {
    id: string;
    name: string;
    techs?: Tech[];
    project?: Project;
    project_id: string;
    _count?: TechCategoryCount | null;
}
