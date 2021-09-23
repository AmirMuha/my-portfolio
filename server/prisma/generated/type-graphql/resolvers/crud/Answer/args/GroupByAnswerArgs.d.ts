import { AnswerOrderByWithAggregationInput } from "../../../inputs/AnswerOrderByWithAggregationInput";
import { AnswerScalarWhereWithAggregatesInput } from "../../../inputs/AnswerScalarWhereWithAggregatesInput";
import { AnswerWhereInput } from "../../../inputs/AnswerWhereInput";
export declare class GroupByAnswerArgs {
    where?: AnswerWhereInput | undefined;
    orderBy?: AnswerOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "answer">;
    having?: AnswerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
