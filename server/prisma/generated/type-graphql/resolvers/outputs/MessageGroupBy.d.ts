import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";
export declare class MessageGroupBy {
    id: string;
    subject: string;
    from: string;
    body: string;
    read_status: boolean;
    answer_status: boolean;
    admin_id: string;
    createdAd: Date;
    _count: MessageCountAggregate | null;
    _min: MessageMinAggregate | null;
    _max: MessageMaxAggregate | null;
}
