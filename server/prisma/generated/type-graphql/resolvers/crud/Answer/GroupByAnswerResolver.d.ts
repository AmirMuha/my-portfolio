import { GraphQLResolveInfo } from "graphql";
import { GroupByAnswerArgs } from "./args/GroupByAnswerArgs";
import { AnswerGroupBy } from "../../outputs/AnswerGroupBy";
export declare class GroupByAnswerResolver {
    groupByAnswer(ctx: any, info: GraphQLResolveInfo, args: GroupByAnswerArgs): Promise<AnswerGroupBy[]>;
}
