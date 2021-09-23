import { AdminOrderByWithRelationInput } from "../inputs/AdminOrderByWithRelationInput";
export declare class MessageOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    from?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    read_status?: "asc" | "desc" | undefined;
    answer_status?: "asc" | "desc" | undefined;
    admin?: AdminOrderByWithRelationInput | undefined;
    admin_id?: "asc" | "desc" | undefined;
    createdAd?: "asc" | "desc" | undefined;
}
