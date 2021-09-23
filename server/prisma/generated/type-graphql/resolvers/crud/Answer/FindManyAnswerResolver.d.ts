import { GraphQLResolveInfo } from "graphql";
import { FindManyAnswerArgs } from "./args/FindManyAnswerArgs";
import { Answer } from "../../../models/Answer";
export declare class FindManyAnswerResolver {
    answers(ctx: any, info: GraphQLResolveInfo, args: FindManyAnswerArgs): Promise<Answer[]>;
}
