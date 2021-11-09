import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackWhereInput } from "../inputs/StackWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackListRelationFilter {
  @TypeGraphQL.Field(_type => StackWhereInput, {
    nullable: true
  })
  every?: StackWhereInput | undefined;

  @TypeGraphQL.Field(_type => StackWhereInput, {
    nullable: true
  })
  some?: StackWhereInput | undefined;

  @TypeGraphQL.Field(_type => StackWhereInput, {
    nullable: true
  })
  none?: StackWhereInput | undefined;
}
