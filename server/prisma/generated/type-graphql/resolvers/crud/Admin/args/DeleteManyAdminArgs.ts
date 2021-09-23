import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminWhereInput } from "../../../inputs/AdminWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAdminArgs {
  @TypeGraphQL.Field(_type => AdminWhereInput, {
    nullable: true
  })
  where?: AdminWhereInput | undefined;
}
