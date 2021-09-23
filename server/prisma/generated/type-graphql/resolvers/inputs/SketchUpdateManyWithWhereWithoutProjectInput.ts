import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchScalarWhereInput } from "../inputs/SketchScalarWhereInput";
import { SketchUpdateManyMutationInput } from "../inputs/SketchUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchUpdateManyWithWhereWithoutProjectInput {
  @TypeGraphQL.Field(_type => SketchScalarWhereInput, {
    nullable: false
  })
  where!: SketchScalarWhereInput;

  @TypeGraphQL.Field(_type => SketchUpdateManyMutationInput, {
    nullable: false
  })
  data!: SketchUpdateManyMutationInput;
}
