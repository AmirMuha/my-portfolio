import { GraphQLResolveInfo } from "graphql";
import { AggregateQuestionArgs } from "./args/AggregateQuestionArgs";
import { AggregateQuestion } from "../../outputs/AggregateQuestion";
export declare class AggregateQuestionResolver {
    aggregateQuestion(ctx: any, info: GraphQLResolveInfo, args: AggregateQuestionArgs): Promise<AggregateQuestion>;
}
