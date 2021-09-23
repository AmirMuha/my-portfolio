import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";
export declare class AggregateMessage {
    _count: MessageCountAggregate | null;
    _min: MessageMinAggregate | null;
    _max: MessageMaxAggregate | null;
}
