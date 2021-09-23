import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAnswerArgs } from "./args/DeleteManyAnswerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAnswerResolver {
    deleteManyAnswer(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAnswerArgs): Promise<AffectedRowsOutput>;
}
