import { SketchCountAggregate } from "../outputs/SketchCountAggregate";
import { SketchMaxAggregate } from "../outputs/SketchMaxAggregate";
import { SketchMinAggregate } from "../outputs/SketchMinAggregate";
export declare class AggregateSketch {
    _count: SketchCountAggregate | null;
    _min: SketchMinAggregate | null;
    _max: SketchMaxAggregate | null;
}
