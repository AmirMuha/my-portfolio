import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechWhereUniqueInput } from "../../../inputs/TechWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTechArgs {
  @TypeGraphQL.Field(_type => TechWhereUniqueInput, {
    nullable: false
  })
  where!: TechWhereUniqueInput;
}
