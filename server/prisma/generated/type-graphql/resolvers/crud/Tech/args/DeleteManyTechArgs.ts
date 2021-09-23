import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechWhereInput } from "../../../inputs/TechWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTechArgs {
  @TypeGraphQL.Field(_type => TechWhereInput, {
    nullable: true
  })
  where?: TechWhereInput | undefined;
}
