import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutScalarWhereInput } from "../inputs/AboutScalarWhereInput";
import { AboutUpdateManyMutationInput } from "../inputs/AboutUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutUpdateManyWithWhereWithoutAdminInput {
  @TypeGraphQL.Field(_type => AboutScalarWhereInput, {
    nullable: false
  })
  where!: AboutScalarWhereInput;

  @TypeGraphQL.Field(_type => AboutUpdateManyMutationInput, {
    nullable: false
  })
  data!: AboutUpdateManyMutationInput;
}
