import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchUpdateManyMutationInput } from "../../../inputs/SketchUpdateManyMutationInput";
import { SketchWhereInput } from "../../../inputs/SketchWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySketchArgs {
  @TypeGraphQL.Field(_type => SketchUpdateManyMutationInput, {
    nullable: false
  })
  data!: SketchUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SketchWhereInput, {
    nullable: true
  })
  where?: SketchWhereInput | undefined;
}
