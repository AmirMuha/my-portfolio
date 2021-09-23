import { GraphQLResolveInfo } from "graphql";
import { GroupByQuestionArgs } from "./args/GroupByQuestionArgs";
import { QuestionGroupBy } from "../../outputs/QuestionGroupBy";
export declare class GroupByQuestionResolver {
    groupByQuestion(ctx: any, info: GraphQLResolveInfo, args: GroupByQuestionArgs): Promise<QuestionGroupBy[]>;
}
