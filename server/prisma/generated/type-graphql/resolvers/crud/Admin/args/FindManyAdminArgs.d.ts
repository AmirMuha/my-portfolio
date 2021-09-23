import { AdminOrderByWithRelationInput } from "../../../inputs/AdminOrderByWithRelationInput";
import { AdminWhereInput } from "../../../inputs/AdminWhereInput";
import { AdminWhereUniqueInput } from "../../../inputs/AdminWhereUniqueInput";
export declare class FindManyAdminArgs {
    where?: AdminWhereInput | undefined;
    orderBy?: AdminOrderByWithRelationInput[] | undefined;
    cursor?: AdminWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "fname" | "lname" | "apikey" | "password" | "createdAt" | "updatedAt"> | undefined;
}
