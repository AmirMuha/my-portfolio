import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminWhereInput } from "../inputs/AdminWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminRelationFilter {
  @TypeGraphQL.Field(_type => AdminWhereInput, {
    nullable: true
  })
  is?: AdminWhereInput | undefined;

  @TypeGraphQL.Field(_type => AdminWhereInput, {
    nullable: true
  })
  isNot?: AdminWhereInput | undefined;
}
