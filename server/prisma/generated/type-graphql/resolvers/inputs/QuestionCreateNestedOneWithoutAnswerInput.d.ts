import { QuestionCreateOrConnectWithoutAnswerInput } from "../inputs/QuestionCreateOrConnectWithoutAnswerInput";
import { QuestionCreateWithoutAnswerInput } from "../inputs/QuestionCreateWithoutAnswerInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";
export declare class QuestionCreateNestedOneWithoutAnswerInput {
    create?: QuestionCreateWithoutAnswerInput | undefined;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput | undefined;
    connect?: QuestionWhereUniqueInput | undefined;
}
