import { GraphQLResolveInfo } from "graphql";
import { UpsertAnswerArgs } from "./args/UpsertAnswerArgs";
import { Answer } from "../../../models/Answer";
export declare class UpsertAnswerResolver {
    upsertAnswer(ctx: any, info: GraphQLResolveInfo, args: UpsertAnswerArgs): Promise<Answer>;
}
