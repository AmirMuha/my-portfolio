import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCreateManyInput } from "../../../inputs/TechCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTechArgs {
  @TypeGraphQL.Field(_type => [TechCreateManyInput], {
    nullable: false
  })
  data!: TechCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
