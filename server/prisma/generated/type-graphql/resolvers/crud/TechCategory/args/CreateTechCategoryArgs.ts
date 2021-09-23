import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCategoryCreateInput } from "../../../inputs/TechCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTechCategoryArgs {
  @TypeGraphQL.Field(_type => TechCategoryCreateInput, {
    nullable: false
  })
  data!: TechCategoryCreateInput;
}
