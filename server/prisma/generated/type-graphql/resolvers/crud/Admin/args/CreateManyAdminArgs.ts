import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminCreateManyInput } from "../../../inputs/AdminCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAdminArgs {
  @TypeGraphQL.Field(_type => [AdminCreateManyInput], {
    nullable: false
  })
  data!: AdminCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
