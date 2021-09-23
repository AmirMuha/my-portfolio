import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutOrderByWithRelationInput } from "../../../inputs/AboutOrderByWithRelationInput";
import { AboutWhereInput } from "../../../inputs/AboutWhereInput";
import { AboutWhereUniqueInput } from "../../../inputs/AboutWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAboutArgs {
  @TypeGraphQL.Field(_type => AboutWhereInput, {
    nullable: true
  })
  where?: AboutWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AboutOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AboutOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AboutWhereUniqueInput, {
    nullable: true
  })
  cursor?: AboutWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
