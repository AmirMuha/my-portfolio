import { ProjectCountAggregate } from "../outputs/ProjectCountAggregate";
import { ProjectMaxAggregate } from "../outputs/ProjectMaxAggregate";
import { ProjectMinAggregate } from "../outputs/ProjectMinAggregate";
export declare class AggregateProject {
    _count: ProjectCountAggregate | null;
    _min: ProjectMinAggregate | null;
    _max: ProjectMaxAggregate | null;
}
