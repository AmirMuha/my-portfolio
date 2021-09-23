import { AnswerCreateInput } from "../../../inputs/AnswerCreateInput";
import { AnswerUpdateInput } from "../../../inputs/AnswerUpdateInput";
import { AnswerWhereUniqueInput } from "../../../inputs/AnswerWhereUniqueInput";
export declare class UpsertAnswerArgs {
    where: AnswerWhereUniqueInput;
    create: AnswerCreateInput;
    update: AnswerUpdateInput;
}
