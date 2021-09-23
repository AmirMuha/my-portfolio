import { AdminOrderByWithRelationInput } from "../../../inputs/AdminOrderByWithRelationInput";
import { AdminWhereInput } from "../../../inputs/AdminWhereInput";
import { AdminWhereUniqueInput } from "../../../inputs/AdminWhereUniqueInput";
export declare class AggregateAdminArgs {
    where?: AdminWhereInput | undefined;
    orderBy?: AdminOrderByWithRelationInput[] | undefined;
    cursor?: AdminWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
