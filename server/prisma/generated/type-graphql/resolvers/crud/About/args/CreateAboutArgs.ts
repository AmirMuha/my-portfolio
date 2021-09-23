import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutCreateInput } from "../../../inputs/AboutCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAboutArgs {
  @TypeGraphQL.Field(_type => AboutCreateInput, {
    nullable: false
  })
  data!: AboutCreateInput;
}
