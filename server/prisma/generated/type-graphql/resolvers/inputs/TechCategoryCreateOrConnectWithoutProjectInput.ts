import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateWithoutProjectInput } from "../inputs/TechCategoryCreateWithoutProjectInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => TechCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: TechCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechCategoryCreateWithoutProjectInput, {
    nullable: false
  })
  create!: TechCategoryCreateWithoutProjectInput;
}
