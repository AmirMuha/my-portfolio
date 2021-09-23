import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminUpdateManyMutationInput } from "../../../inputs/AdminUpdateManyMutationInput";
import { AdminWhereInput } from "../../../inputs/AdminWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAdminArgs {
  @TypeGraphQL.Field(_type => AdminUpdateManyMutationInput, {
    nullable: false
  })
  data!: AdminUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AdminWhereInput, {
    nullable: true
  })
  where?: AdminWhereInput | undefined;
}
