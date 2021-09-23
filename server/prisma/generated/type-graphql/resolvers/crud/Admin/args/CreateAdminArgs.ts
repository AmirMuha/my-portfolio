import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminCreateInput } from "../../../inputs/AdminCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAdminArgs {
  @TypeGraphQL.Field(_type => AdminCreateInput, {
    nullable: false
  })
  data!: AdminCreateInput;
}
