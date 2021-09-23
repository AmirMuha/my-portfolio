import { QuestionCreateOrConnectWithoutAnswerInput } from "../inputs/QuestionCreateOrConnectWithoutAnswerInput";
import { QuestionCreateWithoutAnswerInput } from "../inputs/QuestionCreateWithoutAnswerInput";
import { QuestionUpdateWithoutAnswerInput } from "../inputs/QuestionUpdateWithoutAnswerInput";
import { QuestionUpsertWithoutAnswerInput } from "../inputs/QuestionUpsertWithoutAnswerInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";
export declare class QuestionUpdateOneWithoutAnswerInput {
    create?: QuestionCreateWithoutAnswerInput | undefined;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput | undefined;
    upsert?: QuestionUpsertWithoutAnswerInput | undefined;
    connect?: QuestionWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: QuestionUpdateWithoutAnswerInput | undefined;
}
