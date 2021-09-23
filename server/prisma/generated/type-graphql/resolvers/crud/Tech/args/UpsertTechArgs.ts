import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCreateInput } from "../../../inputs/TechCreateInput";
import { TechUpdateInput } from "../../../inputs/TechUpdateInput";
import { TechWhereUniqueInput } from "../../../inputs/TechWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTechArgs {
  @TypeGraphQL.Field(_type => TechWhereUniqueInput, {
    nullable: false
  })
  where!: TechWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechCreateInput, {
    nullable: false
  })
  create!: TechCreateInput;

  @TypeGraphQL.Field(_type => TechUpdateInput, {
    nullable: false
  })
  update!: TechUpdateInput;
}
