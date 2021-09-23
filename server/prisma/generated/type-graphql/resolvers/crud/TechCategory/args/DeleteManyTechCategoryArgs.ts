import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCategoryWhereInput } from "../../../inputs/TechCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTechCategoryArgs {
  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  where?: TechCategoryWhereInput | undefined;
}
