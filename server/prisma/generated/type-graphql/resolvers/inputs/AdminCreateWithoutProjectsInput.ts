import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutCreateNestedManyWithoutAdminInput } from "../inputs/AboutCreateNestedManyWithoutAdminInput";
import { MessageCreateNestedManyWithoutAdminInput } from "../inputs/MessageCreateNestedManyWithoutAdminInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminCreateWithoutProjectsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AboutCreateNestedManyWithoutAdminInput, {
    nullable: true
  })
  about?: AboutCreateNestedManyWithoutAdminInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutAdminInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutAdminInput | undefined;
}
