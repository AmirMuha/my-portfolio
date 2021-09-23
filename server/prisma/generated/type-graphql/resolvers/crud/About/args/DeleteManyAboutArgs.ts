import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutWhereInput } from "../../../inputs/AboutWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAboutArgs {
  @TypeGraphQL.Field(_type => AboutWhereInput, {
    nullable: true
  })
  where?: AboutWhereInput | undefined;
}
