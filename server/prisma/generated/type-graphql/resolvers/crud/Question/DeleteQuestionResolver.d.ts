import { GraphQLResolveInfo } from "graphql";
import { DeleteQuestionArgs } from "./args/DeleteQuestionArgs";
import { Question } from "../../../models/Question";
export declare class DeleteQuestionResolver {
    deleteQuestion(ctx: any, info: GraphQLResolveInfo, args: DeleteQuestionArgs): Promise<Question | null>;
}
