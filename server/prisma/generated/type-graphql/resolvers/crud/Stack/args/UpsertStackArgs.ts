import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackCreateInput } from "../../../inputs/StackCreateInput";
import { StackUpdateInput } from "../../../inputs/StackUpdateInput";
import { StackWhereUniqueInput } from "../../../inputs/StackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStackArgs {
  @TypeGraphQL.Field(_type => StackWhereUniqueInput, {
    nullable: false
  })
  where!: StackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StackCreateInput, {
    nullable: false
  })
  create!: StackCreateInput;

  @TypeGraphQL.Field(_type => StackUpdateInput, {
    nullable: false
  })
  update!: StackUpdateInput;
}
