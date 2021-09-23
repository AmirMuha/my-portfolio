import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutWhereInput } from "../inputs/AboutWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutListRelationFilter {
  @TypeGraphQL.Field(_type => AboutWhereInput, {
    nullable: true
  })
  every?: AboutWhereInput | undefined;

  @TypeGraphQL.Field(_type => AboutWhereInput, {
    nullable: true
  })
  some?: AboutWhereInput | undefined;

  @TypeGraphQL.Field(_type => AboutWhereInput, {
    nullable: true
  })
  none?: AboutWhereInput | undefined;
}
