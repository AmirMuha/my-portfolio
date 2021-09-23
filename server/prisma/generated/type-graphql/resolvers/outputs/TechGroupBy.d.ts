import { TechCountAggregate } from "../outputs/TechCountAggregate";
import { TechMaxAggregate } from "../outputs/TechMaxAggregate";
import { TechMinAggregate } from "../outputs/TechMinAggregate";
export declare class TechGroupBy {
    id: string;
    name: string;
    tech_category_id: string;
    _count: TechCountAggregate | null;
    _min: TechMinAggregate | null;
    _max: TechMaxAggregate | null;
}
