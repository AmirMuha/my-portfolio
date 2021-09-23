import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutCreateInput } from "../../../inputs/AboutCreateInput";
import { AboutUpdateInput } from "../../../inputs/AboutUpdateInput";
import { AboutWhereUniqueInput } from "../../../inputs/AboutWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAboutArgs {
  @TypeGraphQL.Field(_type => AboutWhereUniqueInput, {
    nullable: false
  })
  where!: AboutWhereUniqueInput;

  @TypeGraphQL.Field(_type => AboutCreateInput, {
    nullable: false
  })
  create!: AboutCreateInput;

  @TypeGraphQL.Field(_type => AboutUpdateInput, {
    nullable: false
  })
  update!: AboutUpdateInput;
}
