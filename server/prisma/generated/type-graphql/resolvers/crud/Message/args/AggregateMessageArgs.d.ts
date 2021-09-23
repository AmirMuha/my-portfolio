import { MessageOrderByWithRelationInput } from "../../../inputs/MessageOrderByWithRelationInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";
export declare class AggregateMessageArgs {
    where?: MessageWhereInput | undefined;
    orderBy?: MessageOrderByWithRelationInput[] | undefined;
    cursor?: MessageWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
