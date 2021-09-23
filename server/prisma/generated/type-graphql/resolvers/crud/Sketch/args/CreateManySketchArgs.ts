import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchCreateManyInput } from "../../../inputs/SketchCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySketchArgs {
  @TypeGraphQL.Field(_type => [SketchCreateManyInput], {
    nullable: false
  })
  data!: SketchCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
