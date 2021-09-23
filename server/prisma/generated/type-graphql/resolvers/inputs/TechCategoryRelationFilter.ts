import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryWhereInput } from "../inputs/TechCategoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryRelationFilter {
  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  is?: TechCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  isNot?: TechCategoryWhereInput | undefined;
}
