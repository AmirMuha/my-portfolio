import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCategoryCreateManyInput } from "../../../inputs/TechCategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTechCategoryArgs {
  @TypeGraphQL.Field(_type => [TechCategoryCreateManyInput], {
    nullable: false
  })
  data!: TechCategoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
