import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AdminOrderByWithRelationInput } from "../../../inputs/AdminOrderByWithRelationInput";
import { AdminWhereInput } from "../../../inputs/AdminWhereInput";
import { AdminWhereUniqueInput } from "../../../inputs/AdminWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAdminArgs {
  @TypeGraphQL.Field(_type => AdminWhereInput, {
    nullable: true
  })
  where?: AdminWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AdminOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AdminOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AdminWhereUniqueInput, {
    nullable: true
  })
  cursor?: AdminWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
