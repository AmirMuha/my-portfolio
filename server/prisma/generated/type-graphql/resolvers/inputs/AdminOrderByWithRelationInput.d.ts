import { AboutOrderByRelationAggregateInput } from "../inputs/AboutOrderByRelationAggregateInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
export declare class AdminOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    fname?: "asc" | "desc" | undefined;
    lname?: "asc" | "desc" | undefined;
    about?: AboutOrderByRelationAggregateInput | undefined;
    messages?: MessageOrderByRelationAggregateInput | undefined;
    projects?: ProjectOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
