import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StackOrderByWithRelationInput } from "../../../inputs/StackOrderByWithRelationInput";
import { StackWhereInput } from "../../../inputs/StackWhereInput";
import { StackWhereUniqueInput } from "../../../inputs/StackWhereUniqueInput";
import { StackScalarFieldEnum } from "../../../../enums/StackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AdminStackArgs {
  @TypeGraphQL.Field(_type => StackWhereInput, {
    nullable: true
  })
  where?: StackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StackOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StackOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StackWhereUniqueInput, {
    nullable: true
  })
  cursor?: StackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StackScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "image" | "admin_id"> | undefined;
}
