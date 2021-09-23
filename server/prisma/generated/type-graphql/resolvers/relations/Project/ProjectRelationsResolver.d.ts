import { Admin } from "../../../models/Admin";
import { Project } from "../../../models/Project";
import { Question } from "../../../models/Question";
import { Sketch } from "../../../models/Sketch";
import { TechCategory } from "../../../models/TechCategory";
import { ProjectQuestionsArgs } from "./args/ProjectQuestionsArgs";
import { ProjectSketchesArgs } from "./args/ProjectSketchesArgs";
import { ProjectTech_categoriesArgs } from "./args/ProjectTech_categoriesArgs";
export declare class ProjectRelationsResolver {
    tech_categories(project: Project, ctx: any, args: ProjectTech_categoriesArgs): Promise<TechCategory[]>;
    questions(project: Project, ctx: any, args: ProjectQuestionsArgs): Promise<Question[]>;
    sketches(project: Project, ctx: any, args: ProjectSketchesArgs): Promise<Sketch[]>;
    admin(project: Project, ctx: any): Promise<Admin>;
}
