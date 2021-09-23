import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCreateWithoutTech_categoriesInput } from "../inputs/TechCreateWithoutTech_categoriesInput";
import { TechWhereUniqueInput } from "../inputs/TechWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCreateOrConnectWithoutTech_categoriesInput {
  @TypeGraphQL.Field(_type => TechWhereUniqueInput, {
    nullable: false
  })
  where!: TechWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechCreateWithoutTech_categoriesInput, {
    nullable: false
  })
  create!: TechCreateWithoutTech_categoriesInput;
}
