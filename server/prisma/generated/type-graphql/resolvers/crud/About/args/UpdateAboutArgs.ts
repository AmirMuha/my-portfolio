import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutUpdateInput } from "../../../inputs/AboutUpdateInput";
import { AboutWhereUniqueInput } from "../../../inputs/AboutWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAboutArgs {
  @TypeGraphQL.Field(_type => AboutUpdateInput, {
    nullable: false
  })
  data!: AboutUpdateInput;

  @TypeGraphQL.Field(_type => AboutWhereUniqueInput, {
    nullable: false
  })
  where!: AboutWhereUniqueInput;
}
