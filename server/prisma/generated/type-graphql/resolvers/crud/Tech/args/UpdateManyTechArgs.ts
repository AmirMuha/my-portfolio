import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechUpdateManyMutationInput } from "../../../inputs/TechUpdateManyMutationInput";
import { TechWhereInput } from "../../../inputs/TechWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTechArgs {
  @TypeGraphQL.Field(_type => TechUpdateManyMutationInput, {
    nullable: false
  })
  data!: TechUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TechWhereInput, {
    nullable: true
  })
  where?: TechWhereInput | undefined;
}
