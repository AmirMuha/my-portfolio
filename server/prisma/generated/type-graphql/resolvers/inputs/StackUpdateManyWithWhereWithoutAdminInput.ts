import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StackScalarWhereInput } from "../inputs/StackScalarWhereInput";
import { StackUpdateManyMutationInput } from "../inputs/StackUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackUpdateManyWithWhereWithoutAdminInput {
  @TypeGraphQL.Field(_type => StackScalarWhereInput, {
    nullable: false
  })
  where!: StackScalarWhereInput;

  @TypeGraphQL.Field(_type => StackUpdateManyMutationInput, {
    nullable: false
  })
  data!: StackUpdateManyMutationInput;
}
