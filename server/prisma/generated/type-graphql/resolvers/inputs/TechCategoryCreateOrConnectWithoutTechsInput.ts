import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateWithoutTechsInput } from "../inputs/TechCategoryCreateWithoutTechsInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryCreateOrConnectWithoutTechsInput {
  @TypeGraphQL.Field(_type => TechCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: TechCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechCategoryCreateWithoutTechsInput, {
    nullable: false
  })
  create!: TechCategoryCreateWithoutTechsInput;
}
