import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackCreateManyInput } from "../../../inputs/StackCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStackArgs {
  @TypeGraphQL.Field(_type => [StackCreateManyInput], {
    nullable: false
  })
  data!: StackCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
