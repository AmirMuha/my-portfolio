import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryWhereInput } from "../inputs/TechCategoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryListRelationFilter {
  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  every?: TechCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  some?: TechCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  none?: TechCategoryWhereInput | undefined;
}
