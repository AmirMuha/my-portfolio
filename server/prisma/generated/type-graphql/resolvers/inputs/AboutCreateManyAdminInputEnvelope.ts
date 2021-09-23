import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutCreateManyAdminInput } from "../inputs/AboutCreateManyAdminInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutCreateManyAdminInputEnvelope {
  @TypeGraphQL.Field(_type => [AboutCreateManyAdminInput], {
    nullable: false
  })
  data!: AboutCreateManyAdminInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
