import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyfilesInput } from "../inputs/MessageCreateManyfilesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
  body!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  read_status?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  answer_status?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  admin_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  answeredAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAd?: Date | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyfilesInput, {
    nullable: true
  })
  files?: MessageCreateManyfilesInput | undefined;
}
