import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateNestedOneWithoutStackInput } from "../inputs/AdminCreateNestedOneWithoutStackInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StackCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => AdminCreateNestedOneWithoutStackInput, {
    nullable: false
  })
  admin!: AdminCreateNestedOneWithoutStackInput;
}
