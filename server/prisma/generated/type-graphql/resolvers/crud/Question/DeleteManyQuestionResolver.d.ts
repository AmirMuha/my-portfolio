import { GraphQLResolveInfo } from "graphql";
import { DeleteManyQuestionArgs } from "./args/DeleteManyQuestionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyQuestionResolver {
    deleteManyQuestion(ctx: any, info: GraphQLResolveInfo, args: DeleteManyQuestionArgs): Promise<AffectedRowsOutput>;
}
