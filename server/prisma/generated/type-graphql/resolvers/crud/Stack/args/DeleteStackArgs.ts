import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackWhereUniqueInput } from "../../../inputs/StackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStackArgs {
  @TypeGraphQL.Field(_type => StackWhereUniqueInput, {
    nullable: false
  })
  where!: StackWhereUniqueInput;
}
