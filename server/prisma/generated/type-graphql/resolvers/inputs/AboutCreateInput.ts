import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateNestedOneWithoutAboutInput } from "../inputs/AdminCreateNestedOneWithoutAboutInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutCreateInput {
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
  body!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AdminCreateNestedOneWithoutAboutInput, {
    nullable: false
  })
  admin!: AdminCreateNestedOneWithoutAboutInput;
}
