import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCategoryUpdateManyMutationInput } from "../../../inputs/TechCategoryUpdateManyMutationInput";
import { TechCategoryWhereInput } from "../../../inputs/TechCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTechCategoryArgs {
  @TypeGraphQL.Field(_type => TechCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: TechCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  where?: TechCategoryWhereInput | undefined;
}
