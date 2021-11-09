import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackScalarWhereInput {
  @TypeGraphQL.Field(_type => [StackScalarWhereInput], {
    nullable: true
  })
  AND?: StackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackScalarWhereInput], {
    nullable: true
  })
  OR?: StackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StackScalarWhereInput], {
    nullable: true
  })
  NOT?: StackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  admin_id?: StringFilter | undefined;
}
