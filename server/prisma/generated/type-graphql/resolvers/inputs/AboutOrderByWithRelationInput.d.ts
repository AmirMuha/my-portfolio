import { AdminOrderByWithRelationInput } from "../inputs/AdminOrderByWithRelationInput";
export declare class AboutOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    admin?: AdminOrderByWithRelationInput | undefined;
    admin_id?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
