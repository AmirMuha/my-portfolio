import { GraphQLResolveInfo } from "graphql";
import { CreateManyAnswerArgs } from "./args/CreateManyAnswerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAnswerResolver {
    createManyAnswer(ctx: any, info: GraphQLResolveInfo, args: CreateManyAnswerArgs): Promise<AffectedRowsOutput>;
}
