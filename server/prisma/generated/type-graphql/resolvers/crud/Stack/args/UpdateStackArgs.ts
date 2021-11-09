import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackUpdateInput } from "../../../inputs/StackUpdateInput";
import { StackWhereUniqueInput } from "../../../inputs/StackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStackArgs {
  @TypeGraphQL.Field(_type => StackUpdateInput, {
    nullable: false
  })
  data!: StackUpdateInput;

  @TypeGraphQL.Field(_type => StackWhereUniqueInput, {
    nullable: false
  })
  where!: StackWhereUniqueInput;
}
