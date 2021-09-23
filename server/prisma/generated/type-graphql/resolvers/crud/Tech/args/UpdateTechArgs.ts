import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechUpdateInput } from "../../../inputs/TechUpdateInput";
import { TechWhereUniqueInput } from "../../../inputs/TechWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTechArgs {
  @TypeGraphQL.Field(_type => TechUpdateInput, {
    nullable: false
  })
  data!: TechUpdateInput;

  @TypeGraphQL.Field(_type => TechWhereUniqueInput, {
    nullable: false
  })
  where!: TechWhereUniqueInput;
}
