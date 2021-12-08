import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Admin } from "../models/Admin";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Message {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  from!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  files!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  read_status!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  answer_status!: boolean;

  admin?: Admin;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  admin_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  answeredAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAd!: Date;
}
