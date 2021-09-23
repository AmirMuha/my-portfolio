import { AnswerOrderByWithRelationInput } from "../../../inputs/AnswerOrderByWithRelationInput";
import { AnswerWhereInput } from "../../../inputs/AnswerWhereInput";
import { AnswerWhereUniqueInput } from "../../../inputs/AnswerWhereUniqueInput";
export declare class AggregateAnswerArgs {
    where?: AnswerWhereInput | undefined;
    orderBy?: AnswerOrderByWithRelationInput[] | undefined;
    cursor?: AnswerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
