import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryScalarWhereInput } from "../inputs/TechCategoryScalarWhereInput";
import { TechCategoryUpdateManyMutationInput } from "../inputs/TechCategoryUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryUpdateManyWithWhereWithoutProjectInput {
  @TypeGraphQL.Field(_type => TechCategoryScalarWhereInput, {
    nullable: false
  })
  where!: TechCategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => TechCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: TechCategoryUpdateManyMutationInput;
}
