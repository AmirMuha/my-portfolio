import { Answer } from "../../../models/Answer";
import { Question } from "../../../models/Question";
export declare class AnswerRelationsResolver {
    question(answer: Answer, ctx: any): Promise<Question | null>;
}
