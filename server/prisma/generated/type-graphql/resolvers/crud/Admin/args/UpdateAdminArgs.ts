import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminUpdateInput } from "../../../inputs/AdminUpdateInput";
import { AdminWhereUniqueInput } from "../../../inputs/AdminWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAdminArgs {
  @TypeGraphQL.Field(_type => AdminUpdateInput, {
    nullable: false
  })
  data!: AdminUpdateInput;

  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: false
  })
  where!: AdminWhereUniqueInput;
}
