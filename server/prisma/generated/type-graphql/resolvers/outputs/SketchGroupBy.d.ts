import { SketchCountAggregate } from "../outputs/SketchCountAggregate";
import { SketchMaxAggregate } from "../outputs/SketchMaxAggregate";
import { SketchMinAggregate } from "../outputs/SketchMinAggregate";
export declare class SketchGroupBy {
    id: string;
    title: string;
    body: string;
    download_link: string;
    image: string;
    project_id: string;
    _count: SketchCountAggregate | null;
    _min: SketchMinAggregate | null;
    _max: SketchMaxAggregate | null;
}
