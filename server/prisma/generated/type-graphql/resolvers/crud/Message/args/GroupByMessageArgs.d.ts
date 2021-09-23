import { MessageOrderByWithAggregationInput } from "../../../inputs/MessageOrderByWithAggregationInput";
import { MessageScalarWhereWithAggregatesInput } from "../../../inputs/MessageScalarWhereWithAggregatesInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
export declare class GroupByMessageArgs {
    where?: MessageWhereInput | undefined;
    orderBy?: MessageOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "subject" | "from" | "body" | "read_status" | "answer_status" | "admin_id" | "createdAd">;
    having?: MessageScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
