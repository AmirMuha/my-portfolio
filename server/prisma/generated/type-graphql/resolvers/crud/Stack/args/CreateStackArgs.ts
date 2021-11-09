import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackCreateInput } from "../../../inputs/StackCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStackArgs {
  @TypeGraphQL.Field(_type => StackCreateInput, {
    nullable: false
  })
  data!: StackCreateInput;
}
