import { GraphQLResolveInfo } from "graphql";
import { FindUniqueQuestionArgs } from "./args/FindUniqueQuestionArgs";
import { Question } from "../../../models/Question";
export declare class FindUniqueQuestionResolver {
    question(ctx: any, info: GraphQLResolveInfo, args: FindUniqueQuestionArgs): Promise<Question | null>;
}
