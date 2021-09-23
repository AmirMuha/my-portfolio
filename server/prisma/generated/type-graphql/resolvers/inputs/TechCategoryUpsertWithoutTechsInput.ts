import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateWithoutTechsInput } from "../inputs/TechCategoryCreateWithoutTechsInput";
import { TechCategoryUpdateWithoutTechsInput } from "../inputs/TechCategoryUpdateWithoutTechsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryUpsertWithoutTechsInput {
  @TypeGraphQL.Field(_type => TechCategoryUpdateWithoutTechsInput, {
    nullable: false
  })
  update!: TechCategoryUpdateWithoutTechsInput;

  @TypeGraphQL.Field(_type => TechCategoryCreateWithoutTechsInput, {
    nullable: false
  })
  create!: TechCategoryCreateWithoutTechsInput;
}
