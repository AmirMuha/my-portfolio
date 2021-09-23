import { GraphQLResolveInfo } from "graphql";
import { UpsertQuestionArgs } from "./args/UpsertQuestionArgs";
import { Question } from "../../../models/Question";
export declare class UpsertQuestionResolver {
    upsertQuestion(ctx: any, info: GraphQLResolveInfo, args: UpsertQuestionArgs): Promise<Question>;
}
