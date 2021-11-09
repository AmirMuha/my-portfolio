import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackWhereInput } from "../../../inputs/StackWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStackArgs {
  @TypeGraphQL.Field(_type => StackWhereInput, {
    nullable: true
  })
  where?: StackWhereInput | undefined;
}
