import { Tech } from "../../../models/Tech";
import { TechCategory } from "../../../models/TechCategory";
export declare class TechRelationsResolver {
    tech_categories(tech: Tech, ctx: any): Promise<TechCategory>;
}
