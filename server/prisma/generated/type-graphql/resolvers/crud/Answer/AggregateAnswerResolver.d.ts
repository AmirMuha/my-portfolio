import { GraphQLResolveInfo } from "graphql";
import { AggregateAnswerArgs } from "./args/AggregateAnswerArgs";
import { AggregateAnswer } from "../../outputs/AggregateAnswer";
export declare class AggregateAnswerResolver {
    aggregateAnswer(ctx: any, info: GraphQLResolveInfo, args: AggregateAnswerArgs): Promise<AggregateAnswer>;
}
