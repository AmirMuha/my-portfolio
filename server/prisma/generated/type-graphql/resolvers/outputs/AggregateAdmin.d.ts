import { AdminCountAggregate } from "../outputs/AdminCountAggregate";
import { AdminMaxAggregate } from "../outputs/AdminMaxAggregate";
import { AdminMinAggregate } from "../outputs/AdminMinAggregate";
export declare class AggregateAdmin {
    _count: AdminCountAggregate | null;
    _min: AdminMinAggregate | null;
    _max: AdminMaxAggregate | null;
}
