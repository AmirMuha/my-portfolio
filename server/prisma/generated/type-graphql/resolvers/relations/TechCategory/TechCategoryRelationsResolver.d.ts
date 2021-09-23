import { Project } from "../../../models/Project";
import { Tech } from "../../../models/Tech";
import { TechCategory } from "../../../models/TechCategory";
import { TechCategoryTechsArgs } from "./args/TechCategoryTechsArgs";
export declare class TechCategoryRelationsResolver {
    techs(techCategory: TechCategory, ctx: any, args: TechCategoryTechsArgs): Promise<Tech[]>;
    project(techCategory: TechCategory, ctx: any): Promise<Project>;
}
