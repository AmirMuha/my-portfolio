import { QuestionCountAggregate } from "../outputs/QuestionCountAggregate";
import { QuestionMaxAggregate } from "../outputs/QuestionMaxAggregate";
import { QuestionMinAggregate } from "../outputs/QuestionMinAggregate";
export declare class AggregateQuestion {
    _count: QuestionCountAggregate | null;
    _min: QuestionMinAggregate | null;
    _max: QuestionMaxAggregate | null;
}
