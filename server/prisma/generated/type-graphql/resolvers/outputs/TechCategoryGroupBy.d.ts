import { TechCategoryCountAggregate } from "../outputs/TechCategoryCountAggregate";
import { TechCategoryMaxAggregate } from "../outputs/TechCategoryMaxAggregate";
import { TechCategoryMinAggregate } from "../outputs/TechCategoryMinAggregate";
export declare class TechCategoryGroupBy {
    id: string;
    name: string;
    project_id: string;
    _count: TechCategoryCountAggregate | null;
    _min: TechCategoryMinAggregate | null;
    _max: TechCategoryMaxAggregate | null;
}
