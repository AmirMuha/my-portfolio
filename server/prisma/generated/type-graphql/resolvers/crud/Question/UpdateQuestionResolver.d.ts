import { GraphQLResolveInfo } from "graphql";
import { UpdateQuestionArgs } from "./args/UpdateQuestionArgs";
import { Question } from "../../../models/Question";
export declare class UpdateQuestionResolver {
    updateQuestion(ctx: any, info: GraphQLResolveInfo, args: UpdateQuestionArgs): Promise<Question | null>;
}
