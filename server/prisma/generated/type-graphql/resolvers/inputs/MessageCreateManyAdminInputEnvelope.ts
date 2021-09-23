import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyAdminInput } from "../inputs/MessageCreateManyAdminInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateManyAdminInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManyAdminInput], {
    nullable: false
  })
  data!: MessageCreateManyAdminInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
