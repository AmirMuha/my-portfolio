import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAnswerArgs } from "./args/UpdateManyAnswerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAnswerResolver {
    updateManyAnswer(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAnswerArgs): Promise<AffectedRowsOutput>;
}
