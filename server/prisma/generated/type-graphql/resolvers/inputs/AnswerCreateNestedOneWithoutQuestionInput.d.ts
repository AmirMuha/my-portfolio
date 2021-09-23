import { AnswerCreateOrConnectWithoutQuestionInput } from "../inputs/AnswerCreateOrConnectWithoutQuestionInput";
import { AnswerCreateWithoutQuestionInput } from "../inputs/AnswerCreateWithoutQuestionInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";
export declare class AnswerCreateNestedOneWithoutQuestionInput {
    create?: AnswerCreateWithoutQuestionInput | undefined;
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | undefined;
    connect?: AnswerWhereUniqueInput | undefined;
}
