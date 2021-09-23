import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSketchArgs } from "./args/AggregateSketchArgs";
import { Sketch } from "../../../models/Sketch";
import { AggregateSketch } from "../../outputs/AggregateSketch";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sketch)
export class AggregateSketchResolver {
  @TypeGraphQL.Query(_returns => AggregateSketch, {
    nullable: false
  })
  async aggregateSketch(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSketchArgs): Promise<AggregateSketch> {
    return getPrismaFromContext(ctx).sketch.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
