import { GraphQLResolveInfo } from "graphql";
import { CreateManyQuestionArgs } from "./args/CreateManyQuestionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyQuestionResolver {
    createManyQuestion(ctx: any, info: GraphQLResolveInfo, args: CreateManyQuestionArgs): Promise<AffectedRowsOutput>;
}
