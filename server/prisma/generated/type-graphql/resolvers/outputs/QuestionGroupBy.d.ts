import { QuestionCountAggregate } from "../outputs/QuestionCountAggregate";
import { QuestionMaxAggregate } from "../outputs/QuestionMaxAggregate";
import { QuestionMinAggregate } from "../outputs/QuestionMinAggregate";
export declare class QuestionGroupBy {
    id: string;
    question: string;
    answer_id: string;
    project_id: string;
    _count: QuestionCountAggregate | null;
    _min: QuestionMinAggregate | null;
    _max: QuestionMaxAggregate | null;
}
