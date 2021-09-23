import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchCreateInput } from "../../../inputs/SketchCreateInput";
import { SketchUpdateInput } from "../../../inputs/SketchUpdateInput";
import { SketchWhereUniqueInput } from "../../../inputs/SketchWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSketchArgs {
  @TypeGraphQL.Field(_type => SketchWhereUniqueInput, {
    nullable: false
  })
  where!: SketchWhereUniqueInput;

  @TypeGraphQL.Field(_type => SketchCreateInput, {
    nullable: false
  })
  create!: SketchCreateInput;

  @TypeGraphQL.Field(_type => SketchUpdateInput, {
    nullable: false
  })
  update!: SketchUpdateInput;
}
