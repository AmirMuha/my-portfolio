import { GraphQLResolveInfo } from "graphql";
import { CreateAnswerArgs } from "./args/CreateAnswerArgs";
import { Answer } from "../../../models/Answer";
export declare class CreateAnswerResolver {
    createAnswer(ctx: any, info: GraphQLResolveInfo, args: CreateAnswerArgs): Promise<Answer>;
}
