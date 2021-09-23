import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchUpdateInput } from "../../../inputs/SketchUpdateInput";
import { SketchWhereUniqueInput } from "../../../inputs/SketchWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSketchArgs {
  @TypeGraphQL.Field(_type => SketchUpdateInput, {
    nullable: false
  })
  data!: SketchUpdateInput;

  @TypeGraphQL.Field(_type => SketchWhereUniqueInput, {
    nullable: false
  })
  where!: SketchWhereUniqueInput;
}
