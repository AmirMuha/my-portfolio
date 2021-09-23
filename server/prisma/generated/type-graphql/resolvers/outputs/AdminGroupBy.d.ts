import { AdminCountAggregate } from "../outputs/AdminCountAggregate";
import { AdminMaxAggregate } from "../outputs/AdminMaxAggregate";
import { AdminMinAggregate } from "../outputs/AdminMinAggregate";
export declare class AdminGroupBy {
    id: string;
    email: string;
    fname: string;
    lname: string;
    apikey: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AdminCountAggregate | null;
    _min: AdminMinAggregate | null;
    _max: AdminMaxAggregate | null;
}
