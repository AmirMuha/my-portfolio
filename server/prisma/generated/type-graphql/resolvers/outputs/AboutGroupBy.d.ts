import { AboutCountAggregate } from "../outputs/AboutCountAggregate";
import { AboutMaxAggregate } from "../outputs/AboutMaxAggregate";
import { AboutMinAggregate } from "../outputs/AboutMinAggregate";
export declare class AboutGroupBy {
    id: string;
    title: string;
    body: string;
    admin_id: string;
    updatedAt: Date;
    _count: AboutCountAggregate | null;
    _min: AboutMinAggregate | null;
    _max: AboutMaxAggregate | null;
}
