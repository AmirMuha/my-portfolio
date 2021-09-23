import { QuestionCreateInput } from "../../../inputs/QuestionCreateInput";
import { QuestionUpdateInput } from "../../../inputs/QuestionUpdateInput";
import { QuestionWhereUniqueInput } from "../../../inputs/QuestionWhereUniqueInput";
export declare class UpsertQuestionArgs {
    where: QuestionWhereUniqueInput;
    create: QuestionCreateInput;
    update: QuestionUpdateInput;
}
