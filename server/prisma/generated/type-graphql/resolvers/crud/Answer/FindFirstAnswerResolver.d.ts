import { GraphQLResolveInfo } from "graphql";
import { FindFirstAnswerArgs } from "./args/FindFirstAnswerArgs";
import { Answer } from "../../../models/Answer";
export declare class FindFirstAnswerResolver {
    findFirstAnswer(ctx: any, info: GraphQLResolveInfo, args: FindFirstAnswerArgs): Promise<Answer | null>;
}
