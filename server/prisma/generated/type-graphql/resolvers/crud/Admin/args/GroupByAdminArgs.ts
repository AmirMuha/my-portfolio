import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminOrderByWithAggregationInput } from "../../../inputs/AdminOrderByWithAggregationInput";
import { AdminScalarWhereWithAggregatesInput } from "../../../inputs/AdminScalarWhereWithAggregatesInput";
import { AdminWhereInput } from "../../../inputs/AdminWhereInput";
import { AdminScalarFieldEnum } from "../../../../enums/AdminScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAdminArgs {
  @TypeGraphQL.Field(_type => AdminWhereInput, {
    nullable: true
  })
  where?: AdminWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AdminOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AdminOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "fname" | "lname" | "linkedIn" | "whatsapp" | "instagram" | "github" | "heroImage" | "resumes" | "confirmed" | "apikey" | "password" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => AdminScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AdminScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
