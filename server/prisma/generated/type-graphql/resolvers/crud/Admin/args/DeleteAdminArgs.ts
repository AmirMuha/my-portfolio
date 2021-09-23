import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminWhereUniqueInput } from "../../../inputs/AdminWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAdminArgs {
  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: false
  })
  where!: AdminWhereUniqueInput;
}
