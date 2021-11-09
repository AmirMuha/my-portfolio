import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackUpdateManyMutationInput } from "../../../inputs/StackUpdateManyMutationInput";
import { StackWhereInput } from "../../../inputs/StackWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStackArgs {
  @TypeGraphQL.Field(_type => StackUpdateManyMutationInput, {
    nullable: false
  })
  data!: StackUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StackWhereInput, {
    nullable: true
  })
  where?: StackWhereInput | undefined;
}
