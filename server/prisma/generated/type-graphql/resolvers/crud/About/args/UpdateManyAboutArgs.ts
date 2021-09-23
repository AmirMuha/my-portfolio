import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutUpdateManyMutationInput } from "../../../inputs/AboutUpdateManyMutationInput";
import { AboutWhereInput } from "../../../inputs/AboutWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAboutArgs {
  @TypeGraphQL.Field(_type => AboutUpdateManyMutationInput, {
    nullable: false
  })
  data!: AboutUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AboutWhereInput, {
    nullable: true
  })
  where?: AboutWhereInput | undefined;
}
