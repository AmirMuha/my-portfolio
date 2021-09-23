import { AnswerOrderByWithRelationInput } from "../../../inputs/AnswerOrderByWithRelationInput";
import { AnswerWhereInput } from "../../../inputs/AnswerWhereInput";
import { AnswerWhereUniqueInput } from "../../../inputs/AnswerWhereUniqueInput";
export declare class FindFirstAnswerArgs {
    where?: AnswerWhereInput | undefined;
    orderBy?: AnswerOrderByWithRelationInput[] | undefined;
    cursor?: AnswerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "answer"> | undefined;
}
