import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCategoryUpdateInput } from "../../../inputs/TechCategoryUpdateInput";
import { TechCategoryWhereUniqueInput } from "../../../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTechCategoryArgs {
  @TypeGraphQL.Field(_type => TechCategoryUpdateInput, {
    nullable: false
  })
  data!: TechCategoryUpdateInput;

  @TypeGraphQL.Field(_type => TechCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: TechCategoryWhereUniqueInput;
}
