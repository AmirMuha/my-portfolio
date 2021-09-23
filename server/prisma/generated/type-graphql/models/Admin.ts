import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { About } from "../models/About";
import { Message } from "../models/Message";
import { Project } from "../models/Project";
import { AdminCount } from "../resolvers/outputs/AdminCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Admin {
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

  about?: About[];

  messages?: Message[];

  projects?: Project[];

  apikey?: string | null;

  password?: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => AdminCount, {
    nullable: true
  })
  _count?: AdminCount | null;
}
