import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCategoryCreateInput } from "../../../inputs/TechCategoryCreateInput";
import { TechCategoryUpdateInput } from "../../../inputs/TechCategoryUpdateInput";
import { TechCategoryWhereUniqueInput } from "../../../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTechCategoryArgs {
  @TypeGraphQL.Field(_type => TechCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: TechCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechCategoryCreateInput, {
    nullable: false
  })
  create!: TechCategoryCreateInput;

  @TypeGraphQL.Field(_type => TechCategoryUpdateInput, {
    nullable: false
  })
  update!: TechCategoryUpdateInput;
}
