import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchCreateInput } from "../../../inputs/SketchCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSketchArgs {
  @TypeGraphQL.Field(_type => SketchCreateInput, {
    nullable: false
  })
  data!: SketchCreateInput;
}
