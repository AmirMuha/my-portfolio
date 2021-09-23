import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAnswerArgs } from "./args/FindUniqueAnswerArgs";
import { Answer } from "../../../models/Answer";
export declare class FindUniqueAnswerResolver {
    answer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAnswerArgs): Promise<Answer | null>;
}
