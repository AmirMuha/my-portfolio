import { GraphQLResolveInfo } from "graphql";
import { FindFirstQuestionArgs } from "./args/FindFirstQuestionArgs";
import { Question } from "../../../models/Question";
export declare class FindFirstQuestionResolver {
    findFirstQuestion(ctx: any, info: GraphQLResolveInfo, args: FindFirstQuestionArgs): Promise<Question | null>;
}
