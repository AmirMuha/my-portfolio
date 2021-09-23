import { AnswerCountAggregate } from "../outputs/AnswerCountAggregate";
import { AnswerMaxAggregate } from "../outputs/AnswerMaxAggregate";
import { AnswerMinAggregate } from "../outputs/AnswerMinAggregate";
export declare class AggregateAnswer {
    _count: AnswerCountAggregate | null;
    _min: AnswerMinAggregate | null;
    _max: AnswerMaxAggregate | null;
}
