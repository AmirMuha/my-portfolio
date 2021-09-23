import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCreateInput } from "../../../inputs/TechCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTechArgs {
  @TypeGraphQL.Field(_type => TechCreateInput, {
    nullable: false
  })
  data!: TechCreateInput;
}
