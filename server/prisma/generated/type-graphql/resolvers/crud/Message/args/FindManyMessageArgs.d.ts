import { MessageOrderByWithRelationInput } from "../../../inputs/MessageOrderByWithRelationInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";
export declare class FindManyMessageArgs {
    where?: MessageWhereInput | undefined;
    orderBy?: MessageOrderByWithRelationInput[] | undefined;
    cursor?: MessageWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "subject" | "from" | "body" | "read_status" | "answer_status" | "admin_id" | "createdAd"> | undefined;
}
