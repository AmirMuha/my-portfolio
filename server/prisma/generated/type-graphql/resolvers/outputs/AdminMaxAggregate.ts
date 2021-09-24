import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AdminMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fname!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lname!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmed!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  apikey!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
