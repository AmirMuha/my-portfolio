import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutWhereUniqueInput } from "../../../inputs/AboutWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAboutArgs {
  @TypeGraphQL.Field(_type => AboutWhereUniqueInput, {
    nullable: false
  })
  where!: AboutWhereUniqueInput;
}
