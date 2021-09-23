import { GraphQLResolveInfo } from "graphql";
import { FindManyQuestionArgs } from "./args/FindManyQuestionArgs";
import { Question } from "../../../models/Question";
export declare class FindManyQuestionResolver {
    questions(ctx: any, info: GraphQLResolveInfo, args: FindManyQuestionArgs): Promise<Question[]>;
}
