import { AnswerCreateOrConnectWithoutQuestionInput } from "../inputs/AnswerCreateOrConnectWithoutQuestionInput";
import { AnswerCreateWithoutQuestionInput } from "../inputs/AnswerCreateWithoutQuestionInput";
import { AnswerUpdateWithoutQuestionInput } from "../inputs/AnswerUpdateWithoutQuestionInput";
import { AnswerUpsertWithoutQuestionInput } from "../inputs/AnswerUpsertWithoutQuestionInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";
export declare class AnswerUpdateOneRequiredWithoutQuestionInput {
    create?: AnswerCreateWithoutQuestionInput | undefined;
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | undefined;
    upsert?: AnswerUpsertWithoutQuestionInput | undefined;
    connect?: AnswerWhereUniqueInput | undefined;
    update?: AnswerUpdateWithoutQuestionInput | undefined;
}
