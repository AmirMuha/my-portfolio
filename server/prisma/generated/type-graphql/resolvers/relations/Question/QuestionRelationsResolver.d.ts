import { Answer } from "../../../models/Answer";
import { Project } from "../../../models/Project";
import { Question } from "../../../models/Question";
export declare class QuestionRelationsResolver {
    answer(question: Question, ctx: any): Promise<Answer>;
    project(question: Question, ctx: any): Promise<Project>;
}
