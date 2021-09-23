import { GraphQLResolveInfo } from "graphql";
import { UpdateManyQuestionArgs } from "./args/UpdateManyQuestionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyQuestionResolver {
    updateManyQuestion(ctx: any, info: GraphQLResolveInfo, args: UpdateManyQuestionArgs): Promise<AffectedRowsOutput>;
}
