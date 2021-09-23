import { GraphQLResolveInfo } from "graphql";
import { CreateManyTechArgs } from "./args/CreateManyTechArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTechResolver {
    createManyTech(ctx: any, info: GraphQLResolveInfo, args: CreateManyTechArgs): Promise<AffectedRowsOutput>;
}
