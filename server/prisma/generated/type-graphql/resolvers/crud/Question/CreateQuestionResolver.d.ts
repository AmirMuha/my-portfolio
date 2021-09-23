import { GraphQLResolveInfo } from "graphql";
import { CreateQuestionArgs } from "./args/CreateQuestionArgs";
import { Question } from "../../../models/Question";
export declare class CreateQuestionResolver {
    createQuestion(ctx: any, info: GraphQLResolveInfo, args: CreateQuestionArgs): Promise<Question>;
}
