import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCountAggregate } from "../outputs/AdminCountAggregate";
import { AdminMaxAggregate } from "../outputs/AdminMaxAggregate";
import { AdminMinAggregate } from "../outputs/AdminMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AdminGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linkedIn!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  whatsapp!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  instagram!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  github!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  heroImage!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  stack!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  resumes!: string[] | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  confirmed!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPublished!: boolean;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  stacks!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  apikey!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => AdminCountAggregate, {
    nullable: true
  })
  _count!: AdminCountAggregate | null;

  @TypeGraphQL.Field(_type => AdminMinAggregate, {
    nullable: true
  })
  _min!: AdminMinAggregate | null;

  @TypeGraphQL.Field(_type => AdminMaxAggregate, {
    nullable: true
  })
  _max!: AdminMaxAggregate | null;
}
