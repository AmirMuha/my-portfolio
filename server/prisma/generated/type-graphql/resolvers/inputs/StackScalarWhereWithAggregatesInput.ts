import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  image?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  admin_id?: StringWithAggregatesFilter | undefined;
}
