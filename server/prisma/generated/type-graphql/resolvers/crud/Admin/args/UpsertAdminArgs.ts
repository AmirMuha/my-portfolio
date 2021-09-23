import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminCreateInput } from "../../../inputs/AdminCreateInput";
import { AdminUpdateInput } from "../../../inputs/AdminUpdateInput";
import { AdminWhereUniqueInput } from "../../../inputs/AdminWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAdminArgs {
  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: false
  })
  where!: AdminWhereUniqueInput;

  @TypeGraphQL.Field(_type => AdminCreateInput, {
    nullable: false
  })
  create!: AdminCreateInput;

  @TypeGraphQL.Field(_type => AdminUpdateInput, {
    nullable: false
  })
  update!: AdminUpdateInput;
}
