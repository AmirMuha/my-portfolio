import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchWhereInput } from "../../../inputs/SketchWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySketchArgs {
  @TypeGraphQL.Field(_type => SketchWhereInput, {
    nullable: true
  })
  where?: SketchWhereInput | undefined;
}
