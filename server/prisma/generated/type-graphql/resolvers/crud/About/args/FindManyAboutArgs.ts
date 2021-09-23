import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AboutOrderByWithRelationInput } from "../../../inputs/AboutOrderByWithRelationInput";
import { AboutWhereInput } from "../../../inputs/AboutWhereInput";
import { AboutWhereUniqueInput } from "../../../inputs/AboutWhereUniqueInput";
import { AboutScalarFieldEnum } from "../../../../enums/AboutScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAboutArgs {
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

  @TypeGraphQL.Field(_type => [AboutScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "body" | "admin_id" | "updatedAt"> | undefined;
}
