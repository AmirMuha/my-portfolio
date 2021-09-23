import { QuestionOrderByWithRelationInput } from "../../../inputs/QuestionOrderByWithRelationInput";
import { QuestionWhereInput } from "../../../inputs/QuestionWhereInput";
import { QuestionWhereUniqueInput } from "../../../inputs/QuestionWhereUniqueInput";
export declare class FindManyQuestionArgs {
    where?: QuestionWhereInput | undefined;
    orderBy?: QuestionOrderByWithRelationInput[] | undefined;
    cursor?: QuestionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "question" | "answer_id" | "project_id"> | undefined;
}
