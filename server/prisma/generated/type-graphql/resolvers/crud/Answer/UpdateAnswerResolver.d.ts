import { GraphQLResolveInfo } from "graphql";
import { UpdateAnswerArgs } from "./args/UpdateAnswerArgs";
import { Answer } from "../../../models/Answer";
export declare class UpdateAnswerResolver {
    updateAnswer(ctx: any, info: GraphQLResolveInfo, args: UpdateAnswerArgs): Promise<Answer | null>;
}
