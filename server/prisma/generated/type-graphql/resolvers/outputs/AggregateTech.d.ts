import { TechCountAggregate } from "../outputs/TechCountAggregate";
import { TechMaxAggregate } from "../outputs/TechMaxAggregate";
import { TechMinAggregate } from "../outputs/TechMinAggregate";
export declare class AggregateTech {
    _count: TechCountAggregate | null;
    _min: TechMinAggregate | null;
    _max: TechMaxAggregate | null;
}
