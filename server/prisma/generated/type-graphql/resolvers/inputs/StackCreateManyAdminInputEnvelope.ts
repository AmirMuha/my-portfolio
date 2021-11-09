import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackCreateManyAdminInput } from "../inputs/StackCreateManyAdminInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackCreateManyAdminInputEnvelope {
  @TypeGraphQL.Field(_type => [StackCreateManyAdminInput], {
    nullable: false
  })
  data!: StackCreateManyAdminInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
