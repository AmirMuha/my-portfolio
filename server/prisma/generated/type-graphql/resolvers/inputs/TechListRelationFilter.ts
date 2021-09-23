import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechWhereInput } from "../inputs/TechWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechListRelationFilter {
  @TypeGraphQL.Field(_type => TechWhereInput, {
    nullable: true
  })
  every?: TechWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechWhereInput, {
    nullable: true
  })
  some?: TechWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechWhereInput, {
    nullable: true
  })
  none?: TechWhereInput | undefined;
}
