import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutCreateManyInput } from "../../../inputs/AboutCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAboutArgs {
  @TypeGraphQL.Field(_type => [AboutCreateManyInput], {
    nullable: false
  })
  data!: AboutCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
