import { GraphQLResolveInfo } from "graphql";
import { DeleteAnswerArgs } from "./args/DeleteAnswerArgs";
import { Answer } from "../../../models/Answer";
export declare class DeleteAnswerResolver {
    deleteAnswer(ctx: any, info: GraphQLResolveInfo, args: DeleteAnswerArgs): Promise<Answer | null>;
}
