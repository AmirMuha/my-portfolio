import { TechCategoryCountAggregate } from "../outputs/TechCategoryCountAggregate";
import { TechCategoryMaxAggregate } from "../outputs/TechCategoryMaxAggregate";
import { TechCategoryMinAggregate } from "../outputs/TechCategoryMinAggregate";
export declare class AggregateTechCategory {
    _count: TechCategoryCountAggregate | null;
    _min: TechCategoryMinAggregate | null;
    _max: TechCategoryMaxAggregate | null;
}
