import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutOrderByRelationAggregateInput } from "../inputs/AboutOrderByRelationAggregateInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  confirmed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AboutOrderByRelationAggregateInput, {
    nullable: true
  })
  about?: AboutOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput, {
    nullable: true
  })
  messages?: MessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
