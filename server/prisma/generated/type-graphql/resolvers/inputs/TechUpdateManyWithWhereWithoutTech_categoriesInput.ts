import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechScalarWhereInput } from "../inputs/TechScalarWhereInput";
import { TechUpdateManyMutationInput } from "../inputs/TechUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechUpdateManyWithWhereWithoutTech_categoriesInput {
  @TypeGraphQL.Field(_type => TechScalarWhereInput, {
    nullable: false
  })
  where!: TechScalarWhereInput;

  @TypeGraphQL.Field(_type => TechUpdateManyMutationInput, {
    nullable: false
  })
  data!: TechUpdateManyMutationInput;
}
